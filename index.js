// Dependencies
var express        = require('express');
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

// Express routing
var app           = express();
var serviceOrders = require("./routes/serviceOrders");
var users         = require("./routes/users");
var login         = require("./routes/login");

// Defining our port for the cloud service
var port = process.env.PORT || 3000;

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
// mongoose.connect("mongodb://localhost/map_test");
mongoose.connect("nodemongotest/map_test")
mongoose.connection.once("open", function() {

  // Load models
  app.models = require("./models/index");

  // Routes
  app.use("/serviceorders", serviceOrders);
  app.use("/users", users);
  app.use("/login", login);

  // console.log("Listening to PORT " + port);

});

// init
app.listen(port, function() {
  console.log("Process being hosted at: " + port);
});
