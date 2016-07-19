var mongoose  = require('mongoose');
var userSchema = mongoose.schema;

//defines the users' mongoose Schema
var userSchema = new mongoose.Schema({
  username: {type: String, required:true, index:true},
  password: {type: String, required:true},
  email   : {type: String, required:true},
  created : {type: Date,   default: Date.now },
  isActive: Boolean
});
//Constructor
var User = mongoose.model('User', userSchema);
