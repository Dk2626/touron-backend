const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Country = new Schema(
  {
    countryName: {
      type: String,
      required: true,
    },
    aboutCountry: {
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
    visa: {
      onArrival: {
        type: String,
        require: true,
      },
      cost: {
        type: Number,
        required: true,
      },
    },
    general: {
      currency: {
        type: String,
        required: true,
      },
      timeZone: {
        type: String,
        required: true,
      },
      bestTimeToVisit: {
        type: Array,
        required: true,
      },
    },
    bestPlaces: {
      type: String,
      required: true,
    },
    idealDays: {
      type: String,
      required: true,
    },
    countryFlagImage: {
      type: String,
      required: true,
    },
    countryImage: {
      type: String,
      required: false,
    },
  },
  { timestamps: { currentTime: () => Date.now() } }
);

module.exports = mongoose.model("Country", Country);

// {
//     "countryName":"Paris",
//     "description":"A fantastic place",
//     "imageUrl":"https://www.google.com",
//     "weather":"7 2",
//     "visa":{
//         "onArrival":true,
//         "cost":2000
//     },

//     "idealDays":"4-5 days",
//     "general":{
//         "currency":"euro",
//         "timeZone":"ist",
//         "bestTimeToVisit":"june"
//     },
//     "bestPlaces":"paris,eifle tower,italy"

// }
