var mongoose = require("mongoose");

var ClientSchema = new mongoose.Schema({
  account: { type: String, required: true, index: { unique: true } },
  cpf:           { type: String, required: true },
  name:          { type: String, required: true },
  type:          { type: String, required: true },
  phone:         { type: String, required: true },
  landlinePhone: { type: String, required: true },
  mobilePhone:   { type: String, required: true },
  address: {
    publicPlace:  { type: String, required: true },
    number:       { type: Number, required: true },
    neighborhood: { type: String, required: true },
    city:         { type: String, required: true },
    state:        { type: String, required: true },
    cep:          { type: String, required: true }
  }
});

var ServiceOrderSchema = new mongoose.Schema({
  number:             { type: Number, required: true, index: { unique: true } },
  createdAt:          { type: Date, default: Date.now },
  scheduledTo:        { type: Date, required: true, min: Date.now },
  dayPeriod:          { type: String, required: true },
  status:             { type: String, required: true, default: "Open" },
  tvPackage:          { type: String, required: true},
  serviceType:        { type: String, required: true },
  serviceDescription: { type: String, required: true },
  client:             [ClientSchema],
});

module.exports = mongoose.model("serviceOrder", ServiceOrderSchema);
