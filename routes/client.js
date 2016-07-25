var express = require("express");
router      = express.Router();

var Client  = require("../models/Client");
var Address = require("../models/Address");

router.post('/', function(req, res){

  client            = new Client();
  var clientAddress = new Address();

  client.account       = req.body.account;
  client.cpf           = req.body.cpf;
  client.name          = req.body.name;
  client.type          = req.body.type;
  client.landlinePhone = req.body.landlinePhone;
  client.mobilePhone   = req.body.mobilePhone;

  clientAddress.publicPlace  = req.body.address.publicPlace;
  clientAddress.number       = req.body.address.number;
  clientAddress.complement   = req.body.address.complement;
  clientAddress.neighborhood = req.body.address.neighborhood;
  clientAddress.city         = req.body.address.city;
  clientAddress.state        = req.body.address.state;
  clientAddress.cep          = req.body.address.cep;

  client.address.push(clientAddress);

  client.save(function(err){
    if(err) {
      res.status(500).json({ "error": true, "message": err });
    } else {
      res.sendStatus(201);
    }
  });
});

router.get('/:id', function(req, res){

  var clientId = req.params.id;

  Client.findById(clientId, function(err, client){
    if (err){
      res.status(500).json({ "error": true, "message": err });
    } else {
      res.status(200).json(client);
    }
  });

});

module.exports = router;
