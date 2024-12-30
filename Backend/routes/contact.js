const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();
const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');
const sanitize = require('mongo-sanitize');

// POST /api/contact
router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('message', 'Message is required').not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const sanitizedBody = sanitize(req.body);
    const { name, email, message } = sanitizedBody;

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
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Contact Form Submission',
        text: `Thank you for your message, ${name}. We will get back to you soon.`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error sending email:', error);
          return res.status(500).json({ msg: 'Failed to send email' });
        } else {
          console.log('Email sent:', info.response);
          res.status(200).json({ msg: 'Contact saved and email sent' });
        }
      });
    } catch (err) {
      console.error('Error saving contact:', err);
      res.status(500).json({ msg: 'Server error' });
    }
  }
);

module.exports = router;