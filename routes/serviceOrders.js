var express      = require("express");
var router       = express.Router();

var ServiceOrder = require("../models/ServiceOrder");
var Client       = require("../models/Client");
var Address      = require("../models/Address");

router.post('/', function(req, res){

  var serviceOrder       = new ServiceOrder();
  var serviceOrderClient = new Client();
  var clientAddress      = new Address();

  // Service Order
  serviceOrder.number             = req.body.number;
  serviceOrder.createdAt          = req.body.createdAt;
  serviceOrder.scheduledTo        = req.body.scheduledTo;
  serviceOrder.dayPeriod          = req.body.dayPeriod;
  serviceOrder.status             = req.body.status;
  serviceOrder.tvPackage          = req.body.tvPackage;
  serviceOrder.serviceType        = req.body.serviceType;
  serviceOrder.serviceDescription = req.body.serviceDescription;

  // Client
  serviceOrderClient.account       = req.body.client.account;
  serviceOrderClient.cpf           = req.body.client.cpf;
  serviceOrderClient.name          = req.body.client.name;
  serviceOrderClient.type          = req.body.client.type;
  serviceOrderClient.landlinePhone = req.body.client.landlinePhone;
  serviceOrderClient.mobilePhone   = req.body.client.mobilePhone;

  // Address
  clientAddress.publicPlace  = req.body.client.address.publicPlace;
  clientAddress.number       = req.body.client.address.number;
  clientAddress.complement   = req.body.client.address.complement;
  clientAddress.neighborhood = req.body.client.address.neighborhood;
  clientAddress.city         = req.body.client.address.city;
  clientAddress.state        = req.body.client.address.state;
  clientAddress.cep          = req.body.client.address.cep;

  // JSON building
  serviceOrderClient.address.push(clientAddress);
  serviceOrder.client.push(serviceOrderClient);

  serviceOrder.save(function(err){
    if(err) {
      return res.status(500).json({ "error": true, "message": err });
    } else {
      return res.status(200).json({ "error": false, "message": "Service order created successfully." });
    }
  });

});

module.exports = router;
