var express   = require("express");
var router    = express.Router();

var User = require("../models/User");

router.post('/', function(req,res){

  var newUser = new User(req.body);

  newUser.save(function(err, user){
    if(err) {
      return res.status(500).json({ "error": true, "message": err });
    } else {
      return res.status(201).json({ "error": false, "message": "User created successfully." });
    }
  });
});

module.exports = router;
