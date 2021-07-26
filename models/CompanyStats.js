const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CompanyStats = new Schema(
  {
    certifiedCountries: {
      type: Number,
      required: true,
    },
    happyTravellers: {
      type: Number,
      required: true,
    },
    successfulTours: {
      type: Number,
      required: true,
    },
    googleReviewCount: {
      type: Number,
      required: false,
    },
    googleReviewRating: {
      type: String,
      required: false,
    },
  },
  { timestamps: { currentTime: () => Date.now() } }
);

module.exports = mongoose.model("CompanyStats", CompanyStats);
