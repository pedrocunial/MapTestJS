var express = require("express");
var router = express.Router();

var User = require("../models/User");

router.post('/', function(req, res){

  var username = req.body.username;
  var password = req.body.password;

  User.findOne({ "username": username, "password": password }, function(err, user){
    if(err) {
      return res.status(500).json({ "error": true, "message": err });
    } else {
      if(!user) {
        return res.status(404).send(); // User not found
      } else {
        return res.status(200).send(); // Ok
      }
    }
  });

});

module.exports = router;
