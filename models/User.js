var mongoose  = require('mongoose');

var userSchema = new mongoose.Schema({
  username:  { type: String, required: true, index: { unique: true } },
  password:  { type: String, required: true },
  email:     { type: String, required: true },
  firstname: { type: String, required: true },
  lastname:  { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  isActive:  { type: Boolean, default: true }
});

module.exports = mongoose.model('User', userSchema);
