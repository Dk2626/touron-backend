const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Blog = new Schema(
  {
    blogTitle: {
      type: String,
      required: true,
    },
    countryName: {
      type: String,
      required: true,
    },
    cityName: {
      type: Array,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },

    imageSrc: {
      type: String,
      required: true,
    },
    imageCredit: {
      type: String,
      required: false,
    },

    keywords: {
      type: Array,
    },
    subHeading1: {
      type: String,
    },
    content1: {
      type: String,
      maxlength: 100000,
    },
    imageSrc1: {
      type: String,
    },
    imageCredit1: {
      type: String,
      required: false,
    },
    subHeading2: {
      type: String,
    },
    content2: {
      type: String,
      maxlength: 100000,
    },
    imageSrc2: {
      type: String,
    },
    imageCredit2: {
      type: String,
      required: false,
    },
    subHeading3: {
      type: String,
    },
    content3: {
      type: String,
      maxlength: 100000,
    },
    imageSrc3: {
      type: String,
    },
    imageCredit3: {
      type: String,
      required: false,
    },
    subHeading4: {
      type: String,
    },
    content4: {
      type: String,
      maxlength: 100000,
    },
    imageSrc4: {
      type: String,
    },
    imageCredit4: {
      type: String,
      required: false,
    },
    subHeading5: {
      type: String,
    },
    content5: {
      type: String,
      maxlength: 100000,
    },
    imageSrc5: {
      type: String,
    },
    imageCredit5: {
      type: String,
      required: false,
    },
    subHeading6: {
      type: String,
    },
    content6: {
      type: String,
      maxlength: 100000,
    },
    imageSrc6: {
      type: String,
    },
    imageCredit6: {
      type: String,
      required: false,
    },
    writtenBy: {
      type: String,
      required: false,
    },
  },
  { timestamps: { currentTime: () => Date.now() } }
);

module.exports = mongoose.model("Blog", Blog);
