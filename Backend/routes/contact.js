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
    check('phone', 'Phone number is required').not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const sanitizedBody = sanitize(req.body);
    const { name, email, message, phone } = sanitizedBody;

    try {
      // Save to MongoDB
      const newContact = new Contact({ name, email, message, phone });
      await newContact.save();

      // Create a transporter object using the default SMTP transport
      const transporter = nodemailer.createTransport({
        service: 'Gmail', // Use Gmail as the email service
        auth: {
          user: process.env.EMAIL_USER, // Your email address
          pass: process.env.EMAIL_PASS, // Your app-specific password
        },
      });

      // Setup email data
      const mailOptions = {
        from: process.env.EMAIL_USER, // Sender address
        to: process.env.RECEIVER_EMAIL, // Receiver's email address
        subject: 'Contact Form Submission', // Subject line
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`, // Plain text body
      };

      // Send mail with defined transport object
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error sending email:', error);
          return res.status(500).json({ msg: 'Failed to send email', error: error.message });
        } else {
          console.log('Email sent:', info.response);
          res.status(200).json({ msg: 'Contact saved and email sent' });
        }
      });
    } catch (err) {
      console.error('Error saving contact:', err);
      res.status(500).json({ msg: 'Server error', error: err.message });
    }
  }
);

module.exports = router;