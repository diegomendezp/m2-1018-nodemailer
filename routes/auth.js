const express = require('express');

const authRouter = express.Router();
const transporter = require('../mail/transporter');

authRouter.post('/send-email', (req, res, next) => {
  const { email, subject, message } = req.body;
  transporter.sendMail({
    from: '"My Awesome Project 👻" <myawesome@project.com>',
    to: 'iron0618test@gmail.com',
    subject: 'Awesome Subject',
    text: 'Awesome Message',
    html: '<a href="https://www.youtube.com/embed/Wt88GMJmVk0">WEB TO WAPA<a>',
  })
    .then(() => res.render('message', { email, subject, message }))
    .catch(err => console.log(err));
});

module.exports = authRouter;
