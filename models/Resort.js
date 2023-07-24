const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Resort = new Schema(
  {
    cityName: {
      type: String,
    },
    cost: {
      type: String,
    },
    countryName: {
      type: String,
    },
    file: {
      type: String,
    },
    finePrint: {
      type: String,
    },
    loveMeter: {
      type: String,
    },
    offerPercent: {
      type: String,
    },
    overview: {
      type: String,
    },
    inclusion: {
      type: String,
    },
    paymentLink: {
      type: String,
    },
    priority: {
      type: String,
    },
    ratings: {
      type: String,
    },
    resortAwards: {
      type: String,
    },
    resortName: {
      type: String,
    },
    stayFrom: {
      type: String,
    },
    travelByMonth: {
      type: String,
    },
    stayTill: {
      type: String,
    },
    resortRules: {
      checkIn: {
        type: String,
      },
      checkOut: {
        type: String,
      },
      adcancellationPolicyult: {
        type: String,
      },
      honeymoonBenefits: {
        type: String,
      },
    },
    restaurants: {
      type: Array,
    },
    resortImages: {
      type: Array,
    },
    resortFeatures: {
      type: Array,
    },
    resortCategory: {
      type: Array,
    },
  },
  { timestamps: { currentTime: () => Date.now() } }
);

module.exports = mongoose.model('Resort', Resort);
