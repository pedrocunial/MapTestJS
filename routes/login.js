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
        return res.sendStatus(404); // User not found
      } else {
        return res.sendStatus(200); // Ok
      }
    }
  });

});

module.exports = router;
