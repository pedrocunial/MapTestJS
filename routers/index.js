var express   = require('express');
var router    = express.Router();
var mongoose  = require('mongoose');
var User      = require('../models/User');
//get request for user
router.get('/user', function(req, res){
  User.find(function(err,users){
    if(err) {
      return res.status(500).json({ "error": true, "message": err });
    } else {
      return res.send(users);
    }
  })
});

//post request
router.post('/user', function(req,res){
  var newUser = new User(req.body);

  newUser.save(function(err, user){
    if(err) {
      return res.status(500).json({ "error": true, "message": err });
    } else {
      return res.status(200).json({ "error": false, "message": "User created successfully." });
    }
  });
});

module.exports = router;
