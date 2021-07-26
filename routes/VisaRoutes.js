const mongoose = require("mongoose");

const express = require("express");

const router = express.Router();

const Visa = mongoose.model("Visa");

// get City
router.get("/visa", async (req, res) => {
  const visa = await Visa.find();
  console.log("Visa route called");
  res.send(visa);
});

//Post city
router.post("/visa", async (req, res) => {
  try {
    console.log(req.body);
    const visa = new Visa(req.body);

    await visa.save();
    res.json({ visa: visa }).status(200);
  } catch (err) {
    res.send(err);
  }
});

//single city to edit
router.get("/visa/edit/:id", async (req, res) => {
  const visa = await Visa.findById({ _id: req.params.id });
  res.send(visa);
});
router.get("/visa/:countryname", async (req, res) => {
  const visa = await Visa.find({ countryName: req.params.countryname });
  res.send(visa);
});

//Update City

router.post("/visa/edit/:id", async (req, res) => {
  let visa = await Visa.findById({ _id: req.params.id });
  console.log(req.body);

  visa.countryName = req.body.countryName;
  visa.imageUrl = req.body.imageUrl;
  (visa.salaryDocs = {
    salarySubmission: req.body.salarySubmission,
    salaryFinancials: req.body.salaryFinancials,
    salaryDocsRequired: req.body.salaryDocsRequired,
    salaryPhotography: req.body.salaryPhotography,
    salaryHoneymooners: req.body.salaryHoneymooners,
    salaryAppointment: req.body.salaryAppointment,
    salaryDuration: req.body.salaryDuration,
  }),
    (visa.selfEmployedDocs = {
      selfEmployedSubmission: req.body.selfEmployedSubmission,
      selfEmployedFinancials: req.body.selfEmployedFinancials,
      selfEmployedDocsRequired: req.body.selfEmployedDocsRequired,
      selfEmployedPhotography: req.body.selfEmployedPhotography,
      selfEmployedHoneymooners: req.body.selfEmployedHoneymooners,
      selfEmployedAppointment: req.body.selfEmployedAppointment,
      selfEmployedDuration: req.body.selfEmployedDuration,
    }),
    console.log(visa);
  visa.save();
  res.json({ visa: visa }).status(200);
});

//Delete by id

router.post("/visa/delete/:id", async (req, res) => {
  const visa = await Visa.findByIdAndDelete({ _id: req.params.id });
  res.send(visa);
});

module.exports = router;
