const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const locationSchema = new Schema({
  name: { type: String, required: true },
  image: { type: String},
  synopsis:{ type:String},
  category: {type: String},
  date: { type: Date, default: Date.now }
});

const Locations = mongoose.model("Locations", locationSchema);

module.exports = Locations;
