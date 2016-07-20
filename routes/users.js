var express   = require("express");
var router    = express.Router();

var User = require("../models/User");

router.post('/', function(req,res){

  var newUser = new User(req.body);

  newUser.save(function(err, user){
    if(err) {
      return res.status(500).json({ "error": true, "message": err });
    } else {
      return res.sendStatus(201);
    }
  });
});

module.exports = router;
