var express      = require("express");
var router       = express.Router();

var ServiceOrder = require("../models/ServiceOrder");

router.post('/', function(req, res){

  var serviceOrder = new ServiceOrder();

  serviceOrder.number             = req.body.number;
  serviceOrder.scheduledTo        = req.body.scheduledTo;
  serviceOrder.dayPeriod          = req.body.dayPeriod;
  serviceOrder.status             = req.body.status;
  serviceOrder.tvPackage          = req.body.tvPackage;
  serviceOrder.serviceType        = req.body.serviceType;
  serviceOrder.serviceDescription = req.body.serviceDescription;
  serviceOrder.client             = req.body.client;
  serviceOrder.address            = req.body.address;

  serviceOrder.save(function(err){
    if(err) {
      return res.status(500).json({ "error": true, "message": err });
    } else {
      return res.sendStatus(201);
    }
  });

});

router.get('/', function(req, res){

  ServiceOrder.find(function(err, serviceOrders){
    if (err){
      res.status(500).json({"error": true, "message": err});
    } else {
      res.status(200).json(serviceOrders);
    }
  });

});

router.get("/:id", function(req, res){

  var serviceOrderId = req.params.id;

  ServiceOrder.findById(serviceOrderId, function(err, serviceOrder){
      if(err) {
        return res.status(500).json({ "error": true, "message": err });
      } else {
        if(!serviceOrder){
          return res.sendStatus(404);
        } else {
          return res.status(200).json(serviceOrder);
        }
      }
  });

});

router.put("/:id", function(req, res){

  var serviceOrderId = req.params.id;

  // Find service order
  ServiceOrder.findById(serviceOrderId, function(err, serviceOrder){
    if(err) {
      return res.status(500).json({ "error": true, "message": err });
    } else {
      if(!serviceOrder){
        return res.sendStatus(404);
      } else {
        // Update info
        serviceOrder.comment = req.body.comment;
        serviceOrder.status  = req.body.status;
        // Save updated info
        serviceOrder.save(function(err){
          if(err){
            return res.status(500).json({ "error": true, "message": err });
          } else {
            return res.sendStatus(200);
          }
        });
      }
    }
  });

});

module.exports = router;
