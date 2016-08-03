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

router.get("/:username", function(req, res){

  var username = req.params.usernae;

  User.find({"username": username}, function(err, user){
    if (err) {
      return res.status(500).json({"error": true, "message": err});
    } else {
      if (!user){
        return res.sendStatus(404);
      } else {
        return res.status(200).json({"firstname": user.firstname, "lastname": user.lastname});
      }
    }
  });

});

module.exports = router;
