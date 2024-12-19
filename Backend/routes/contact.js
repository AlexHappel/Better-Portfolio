const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

// POST /api/contact
router.post('/', async (req, res) => {
    const { name, email, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    try {
        // Save to MongoDB
        const newContact = new Contact({ name, email, message });
        await newContact.save();

        
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: email,
            to: process.env.EMAIL_USER,
            subject: `New Contact Form Submission from ${name}`,
            text: message,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error(error);
                return res.status(500).json({ msg: 'Error sending email' });
            } else {
                console.log('Email sent: ' + info.response);
                return res.status(200).json({ msg: 'Message sent successfully' });
            }
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server error' });
    }
});

module.exports = router;