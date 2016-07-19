// Dependencies
var express        = require("express");
var mongoose       = require("mongoose");
var bodyParser     = require("body-parser");
var methodOverride = require("method-override");

// Express routing
var app           = express();
var serviceOrders = require("./routes/serviceOrders");

// Middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride("X-HTTP-Method-Override"));

// CORS Support
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Mongoose
mongoose.connect("mongodb://localhost/map_test");
mongoose.connection.once("open", function() {

  // Load models
  app.models = require("./models/index");

  // Routes
  app.use("/serviceorders", serviceOrders);

  console.log("Listening to PORT 3000");
  app.listen(3000);

});
