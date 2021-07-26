const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Visa = new Schema(
  {
    countryName: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },

    salaryDocs: {
      salarySubmission: {
        type: String,
        required: true,
        maxlength: 100000,
      },
      salaryFinancials: {
        type: String,
        required: true,
        maxlength: 100000,
      },

      salaryDocsRequired: {
        type: String,
        required: true,
        maxlength: 100000,
      },
      salaryPhotography: {
        type: String,
        required: true,
        maxlength: 100000,
      },
      salaryHoneymooners: {
        type: String,
        required: true,
        maxlength: 100000,
      },
      salaryAppointment: {
        type: String,
        required: true,
        maxlength: 100000,
      },
      salaryDuration: {
        type: String,
        required: true,
        maxlength: 100000,
      },
    },
    selfEmployedDocs: {
      selfEmployedSubmission: {
        type: String,
        required: true,
        maxlength: 100000,
      },
      selfEmployedFinancials: {
        type: String,
        required: true,
        maxlength: 100000,
      },

      selfEmployedDocsRequired: {
        type: String,
        required: true,
        maxlength: 100000,
      },
      selfEmployedPhotography: {
        type: String,
        required: true,
        maxlength: 100000,
      },
      selfEmployedHoneymooners: {
        type: String,
        required: true,
        maxlength: 100000,
      },
      selfEmployedAppointment: {
        type: String,
        required: true,
        maxlength: 100000,
      },
      selfEmployedDuration: {
        type: String,
        required: true,
        maxlength: 100000,
      },
    },
  },
  { timestamps: { currentTime: () => Date.now() } }
);

module.exports = mongoose.model("Visa", Visa);
