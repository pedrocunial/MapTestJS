// index.js

// Dependencies
var express        = require('express');
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

var app = express();

// Middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));

// Mongoose
mongoose.connect('mongodb://localhost/map_test');
mongoose.connection.once('open', function() {

  // Load models
  app.models = require("./models/index");

  app.listen(3000);
  console.log('listening to port 3000');
});
