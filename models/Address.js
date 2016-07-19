var mongoose = require("mongoose");

var AddressSchema = new mongoose.Schema({
  publicPlace:  { type: String, required: true },
  number:       { type: Number, required: true },
  complement:   { type: String, default: null },
  neighborhood: { type: String, required: true },
  city:         { type: String, required: true },
  state:        { type: String, required: true },
  cep:          { type: String, required: true }
});

module.exports = mongoose.model("address", AddressSchema);
