var mongoose  = require('mongoose');
var userSchema = mongoose.schema;

//defines the users' mongoose Schema
var userSchema = new Schema({
  name    : {type: String, required:true},
  userId  : {type: String, required:true},
  password: {type: String, required:true},
  email   : {type: String, required:true},
  created : {type: Date,   default: Date.now },
  isActive: Boolean
});

var User = mongoose.model('User', userSchema);

module.exports = User;
