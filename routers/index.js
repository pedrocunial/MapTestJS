var express = require('express');
var router  = express.Router();
//get request for user
router.get('/', function(req, res){
  res.send('Hi, This is Flavio Jose');
});

module.exports = router;
