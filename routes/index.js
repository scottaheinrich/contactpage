var express = require('express');
var router = express.Router();
var sendmail = require('sendmail')();

//create reusable transporter object usingthe default smtp
var transporter = nodemailer.createTransport('smtps://scottaheinrich');

// Get /
router.get('/', function(req, res, next) {
  return res.render('index', { message:""});
});

router.get('/email', function (req, res, next) {
  sendmail({
    from: 'scottaheinrich@gmail.com',
    to: 'scottaheinrich@gmail.com',
    subject: req.body.name,
    hmtl: req.body.message,
  }, function(err, reply) {
    if(err){
      return res.render('index', {message: "Error"});
    }else{
      return res.render('index', {message: "Success"});
    }
    console.log(err && err.stack);
    console.dir(reply);
  });
});

module.exports = router;
