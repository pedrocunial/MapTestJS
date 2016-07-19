var express   = require('express');
var router    = express.Router();
var mongoose  = require('mongoose');
var User      = require('../models/User');
//get request for a specific user by id
router.get('/:username,:password', function(req, res){
  var username_value = req.params.username;
  var password_value = req.params.password;
  //Find username and password on database
  User.findOne({"username": username_value, "password":password_value}, function(err,user){
    if(err) {
      //Server failed
      return res.status(500).json({ "error": true, "message": err });
    } else if (!user){
      //user doesn't exist on db
      return res.status(404).json({ "error": true, "message": "User doesn't exist on database" });
    }
    //Authentication
    return res.status(200).json({ "error": false, "message": "User exists on database" });
  })
});
//Post request
router.post('/', function(req,res){
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
