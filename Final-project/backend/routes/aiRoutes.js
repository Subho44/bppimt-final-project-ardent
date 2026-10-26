const express =  require("express");
const Groq = require("groq-sdk");
const Employee = require("../models/Employee");
const { authenticate} = require('../middleware/auth');

const router =express.Router();
router.use(authenticate);

router.post("/chat", async(req,res)=>{
    try {
        const message = req.body.message;
        const employees = await Employee.find();
        const groq = new Groq({
            apiKey:process.env.GROQ_API_KEY
        });
        const result = await groq.chat.completios.create({
            model: process.env.GROQ_MODEL,
            messages: [
                {
                    role:"system",
                    content:`
                    job related
                    `
                },
                {
                    role:"user",
                    content:message.trim()
                }
            ],
            temperature:0.3,
            max_completion_tokens:500
        });
        res.json({
            reply:result.choices[0]?.message?.content
        });
    } catch(err){
        console.error(err);
    }
});

module.exports = router;