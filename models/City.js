const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const City = new Schema(
  {
    countryName: {
      type: String,
      required: true,
    },
    cityName: {
      type: String,
      required: true,
    },
    aboutCity: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    weather: {
      type: String,
      required: true,
    },
    coordinates: {
      latitude: {
        type: String,
        required: true,
      },
      longitude: {
        type: String,
        required: true,
      },
    },
    travelDuration: {
      type: String,
      required: true,
    },
    idealDays: {
      type: String,
      required: true,
    },
    famousPlacesToVisit: {
      type: String,
      required: true,
    },
    airportType: {
      type: String,
      required: true,
    },
    airportName: {
      type: String,
      required: true,
    },
    foodJoints: {
      type: String,
      required: false,
    },
    cityTips: {
      type: String,
      required: false,
    },
    thingsToPack: {
      type: String,
      required: false,
    },
    documentsRequired: {
      type: String,
      required: false,
    },
  },
  { timestamps: { currentTime: () => Date.now() } }
);

module.exports = mongoose.model("City", City);
