const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Banner = new Schema(
  {
    photo: {
      data: Buffer,
      contentType: String,
    },
  },
  { timestamps: { currentTime: () => Date.now() } }
);

module.exports = mongoose.model("Banner", Banner);
