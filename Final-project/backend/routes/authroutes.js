const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const User = require('../models/User');
const router = express.Router();
const normalize = v => String(v || '').trim().toLowerCase();
const safeUser = u => ({ id: u._id, name: u.name, email: u.email, role: u.role });
const mailer = () => nodemailer.createTransport({ service: 'gmail', auth: { user: process.env.MAIL_USER, pass: process.env.MAIL_PASS } });
async function sendOTP(user) {
    if (!process.env.MAIL_USER || !process.env.MAIL_PASS) throw new Error('Email SMTP is not configured');
    const otp = String(crypto.randomInt(100000, 1000000));
    user.otp = await bcrypt.hash(otp, 10);
    user.otpExpire = new Date(Date.now() + 5 * 60 * 1000);
    await user.save();
    await mailer().sendMail({ from: process.env.MAIL_USER, to: user.email, subject: 'Verify your HR Portal email', text: `Your verification code is ${otp}. It expires in 5 minutes.` });
}
router.post('/register', async (req, res) => {
    try {
        const { name, password } = req.body; const email = normalize(req.body.email);
        if (!name?.trim() || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || typeof password !== 'string' || password.length < 8) return res.status(400).json({ message: 'Enter name, valid email, and password (minimum 8 characters)' });
        if (await User.exists({ email })) return res.status(409).json({ message: 'Email already registered' });
        const user = await User.create({ name: name.trim(), email, password: await bcrypt.hash(password, 12), role: 'user', isverified: false });
        try { await sendOTP(user); } catch (e) { await User.deleteOne({ _id: user._id }); throw e; }
        res.status(201).json({ message: 'Registration successful. Check your email for OTP.', email });
    } catch (e) { res.status(500).json({ message: e.code === 11000 ? 'Email already registered' : 'Registration failed. Check SMTP settings.' }); }
});
router.post('/verify', async (req, res) => {
    try {
        const email = normalize(req.body.email), otp = String(req.body.otp || ''); const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: 'Account not found' });
        if (user.isverified) return res.json({ message: 'Account already verified' });
        if (!user.otp || !user.otpExpire || user.otpExpire.getTime() < Date.now() || !(await bcrypt.compare(otp, user.otp))) return res.status(400).json({ message: 'Invalid or expired OTP' });
        user.isverified = true; user.otp = undefined; user.otpExpire = undefined; await user.save(); res.json({ message: 'Email verified. You can now log in.' });
    } catch (e) { res.status(500).json({ message: 'Verification failed' }); }
});
router.post('/resend', async (req, res) => {
    try {
        const user = await User.findOne({ email: normalize(req.body.email) }); if (!user) return res.status(404).json({ message: 'Account not found' });
        if (user.isverified) return res.status(400).json({ message: 'Already verified' }); await sendOTP(user); res.json({ message: 'New OTP sent' });
    } catch (e) { res.status(500).json({ message: 'Could not send OTP. Check SMTP settings.' }); }
});
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ email: normalize(req.body.email) });
        if (!user || typeof req.body.password !== 'string' || !(await bcrypt.compare(req.body.password, user.password))) return res.status(401).json({ message: 'Invalid email or password' });
        if (!user.isverified) return res.status(403).json({ message: 'Verify your email before login', needsVerification: true });
        if (!process.env.JWT_SECRET) return res.status(500).json({ message: 'JWT secret not configured' });
        const token = jwt.sign({ id: user._id.toString(), role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });
        res.json({ message: 'Login successful', token, user: safeUser(user) });
    } catch (e) { res.status(500).json({ message: 'Login failed' }); }
});
router.get('/me', require('../middleware/auth').authenticate, (req, res) => res.json({ user: safeUser(req.user) }));
module.exports = router;
