const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
require('dotenv').config();


router.get('/send-email', function (req, res, next){
  res.status(200).json({
    error: false,
    message: "this is the contact page"
  })
})


const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.email_username,
    pass: process.env.email_password
  }
});

// Email contact route
router.post('/send-email', async function(req, res, next) {
  try{
    const { name, email, message } = req.body;
    await transporter.sendMail({
      from: email,
      to: process.env.email_username,
      subject: `New contact form submission from ${name}`,
      text: `Name: ${name}, email: ${email}, text: ${message}`
    })
    res.status(200).json({
      error: false,
      message: "Email sent Successfully" })
  } catch (error){
    res.status(500).json({
      error: true,
      message: "There was an error submitting the email",
    })
    console.log(error);
  }
  
});

module.exports = router;
