// Dependencies
var express        = require("express");
var mongoose       = require("mongoose");
var bodyParser     = require("body-parser");
var methodOverride = require("method-override");

// Express routing
var app           = express();
var serviceOrders = require("./routes/serviceOrders");
var users         = require("./routes/users");
var login         = require("./routes/login");
var client        = require("./routes/client");

// Middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride("X-HTTP-Method-Override"));

// CORS Support
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// MongoDB Connection
var uristring = process.env.MONGODB_URI || "mongodb://wilder:wilder123@ds027175.mlab.com:27175/zeustv";

mongoose.connect(uristring, function (err, res) {
  if (err) {
    console.log ("Error connecting to: " + uristring + '. ' + err);
  } else {
    console.log ("Connected to: " + uristring);
  }
});

mongoose.connection.once("open", function() {

  // Load models
  app.models = require("./models/index");

  // Routes
  app.use("/serviceorders", serviceOrders);
  app.use("/users", users);
  app.use("/login", login);
  app.use("/clients", client);

  console.log("Listening to PORT 3000");
  app.listen(3000);

});
