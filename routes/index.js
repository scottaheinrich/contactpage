var express = require('express');
var router = express.Router();
var sendmail = require('sendmail')();
var nodemailer = require('noemailer');

//create reusable transporter object usingthe default smtp
var transporter = nodemailer.createTransport('smtps://scottaheinrich@gmail.com:pass@smtp.gmail.com');

// Get /
router.get('/', function(req, res, next) {
  return res.render('index', { message:""});
});

router.get('/email', function (req, res, next) {
  //setup email data with unicode symbols
  console.log(req.body.message)
  var mailOptions = {
    from: 'req.body.email',
    to: 'scottaheinrich@gmail.com',
    subject: "Hello",
    email: 'req.body.email',
    text: req.body.message
  };
  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info){
    if(error){
      return res.render('index', {message: "error"}));
      return console.log(error);
    }
    return res.render('index', { message: "Success"}));
  });

})

module.exports = router;
