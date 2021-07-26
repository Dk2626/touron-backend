const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Place = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  coordinates: {
    latitude: Number,
    longitude: Number,
  },
  description: {
    type: String,
    maxlength: 255,
  },
  journeyType: {
    type: String,
  },

  cityId: {
    type: String,
  },
  cost: Number,
});

module.exports = mongoose.model("Place", Place);
