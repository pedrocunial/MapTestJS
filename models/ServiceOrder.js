var mongoose     = require("mongoose");

var ServiceOrderSchema = new mongoose.Schema({
  number:             { type: Number, required: true, index: { unique: true } },
  createdAt:          { type: Date, default: Date.now },
  scheduledTo:        { type: Date, required: true, min: Date.now },
  dayPeriod:          { type: String, required: true },
  status:             { type: String, required: true, default: "Open" },
  tvPackage:          { type: String, required: true},
  serviceType:        { type: String, required: true },
  serviceDescription: { type: String, required: true },
  client:             { type: String, required: true },
  comment:            { type: String }  
});

module.exports = mongoose.model("serviceOrder", ServiceOrderSchema);
