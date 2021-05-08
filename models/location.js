const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const locationSchema = new Schema({
  name: { type: String, required: true },
  image: { type: String},
  synopsis:{ type:String},
  category: {type: String},
  position: {
    lat: {type: Number},
    lng: {type: Number}
  },
  hours:{type: Array},
  date: { type: Date, default: Date.now }
});

const Locations = mongoose.model("locations", locationSchema);

module.exports = Locations;
