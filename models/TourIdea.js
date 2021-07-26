const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TourIdea = new Schema(
  {
    cityName: {
      type: String,
      required: true,
    },
    countryName: {
      type: String,
      required: true,
    },

    tourName: {
      type: String,
      required: true,
    },
    aboutTour: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    tourCost: {
      adult: {
        type: Number,
        required: true,
      },
      children: {
        type: Number,
        required: true,
      },
    },
    ratings: {
      type: String,
      require: true,
    },
    reviews: {
      type: String,
      require: true,
    },
    inclusion: {
      type: String,
      required: true,
      maxlength: 10000,
    },
    itinerary: {
      type: String,
      required: true,
      maxlength: 10000,
    },
    pickUpPoint: {
      type: Array,
      required: true,
    },
    tourDuration: {
      type: String,
      required: true,
    },
    tourCategory: [String],
    tourType: {
      type: String,
      require: true,
    },
    idealType: [String],
    tourPreferance: {
      type: String,
      required: true,
    },
    additionalInformation: {
      type: String,
      maxlength: 10000,
      required: true,
    },
    referanceLink: {
      type: String,
      required: true,
      maxlength: 10000,
    },
    trending: {
      type: String,
      required: true,
    },
    pickUpAvailableOn: {
      type: Array,
      required: true,
    },
    pickUpTime: {
      type: String,
      required: true,
    },
    dropTime: {
      type: String,
      required: true,
    },
    tourVideoSrc: {
      type: String,
      required: false,
    },
    videoAuthor: {
      type: String,
      required: false,
    },
  },
  { timestamps: { currentTime: () => Date.now() } }
);

module.exports = mongoose.model("TourIdea", TourIdea);
