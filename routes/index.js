var express = require('express');
var app = require('express')();
var router = express.Router();
var nodemailer = require('nodemailer');

//create reusable transporter object usingthe default smtp
var transporter = nodemailer.createTransport('smtps://scottaheinrich');

// Get /
router.get('/', function(req, res, next) {
  return res.render('index', (_layoutFile: 'layouts/main', title))
});

router.get('/email', function (req, res, next) {
  //setup email data with unicode symbols
  console.log(req.body.message)
  var mailOptions = {
    from: req.body.email,
    to: 'scottaheinrich@gmail.com',
    subject: ""
  }
})
