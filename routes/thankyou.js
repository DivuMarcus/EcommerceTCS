var router = require('express').Router();
var User = require('../models/user');

router.get('/',function(req,res){
  if(req.session.user == undefined){
    res.render('main/thankyou',{useremail:"User"});
  }
    else{
    User.findOne({ email: req.session.user.email }, function (err, user) {
      res.render('main/thankyou',{useremail:req.session.user.email});
    })
  }
});

module.exports = router;