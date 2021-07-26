const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const State = new Schema(
  {
    stateName: {
      type: String,
      required: true,
    },
    aboutState: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },

    bestPlaces: {
      type: String,
      required: true,
    },

    bestTimeToVisit: {
      type: Array,
      required: true,
    },
  },
  { timestamps: { currentTime: () => Date.now() } }
);

module.exports = mongoose.model("State", State);

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
