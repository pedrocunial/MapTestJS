var mongoose  = require('mongoose');

var userSchema = new mongoose.Schema({
  username:  { type: String, required: true, index: { unique: true } },
  password:  { type: String, required: true },
  email:     { type: String, required: true },
  firstName: { type: String, required: true },
  lastName:  { type: String, required: true },
  created:   { type: Date, default: Date.now },
  isActive:  { type: Boolean, default: true }
});

module.exports = mongoose.model('user', userSchema);;
