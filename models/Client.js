var mongoose = require("mongoose");
var AddressSchema = require("./Address").model("address").schema;

var ClientSchema = new mongoose.Schema({
  account:       { type: String, required: true, index: { unique: true } },
  cpf:           { type: String, required: true },
  name:          { type: String, required: true },
  type:          { type: String, required: true },
  landlinePhone: { type: String, required: true },
  mobilePhone:   { type: String, required: true },
  address:       [AddressSchema]
});

module.exports = mongoose.model("client", ClientSchema);
