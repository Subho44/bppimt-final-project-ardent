const jwt = require('jsonwebtoken');
const User = require('../models/User');
async function authenticate(req, res, next) {
    try {
        const value = req.headers.authorization || ''; const token = value.startsWith('Bearer ') ? value.slice(7) : null;
        if (!token) return res.status(401).json({ message: 'Please log in' });
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(payload.id); if (!user || !user.isverified) return res.status(401).json({ message: 'Account unavailable' });
        req.user = user; next();
    } catch (e) { return res.status(401).json({ message: 'Invalid or expired session' }); }
}
const adminOnly = (req, res, next) => req.user?.role === 'admin' ? next() : res.status(403).json({ message: 'Admin permission required' });
module.exports = { authenticate, adminOnly };
