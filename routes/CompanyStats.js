const mongoose = require("mongoose");

const express = require("express");

const router = express.Router();

const CompanyStats = mongoose.model("CompanyStats");

// get City
router.get("/stats", async (req, res) => {
  const companyStats = await CompanyStats.find();
  res.send(companyStats);
});

//Post city
router.post("/stats", async (req, res) => {
  try {
    console.log(req.body);
    const companyStats = new CompanyStats(req.body);

    await companyStats.save();
    res.json({ companyStats: companyStats }).status(200);
  } catch (err) {
    res.send(err);
  }
});

//single city to edit
router.get("/stats/edit/:id", async (req, res) => {
  const companyStats = await CompanyStats.findById({ _id: req.params.id });
  res.send(companyStats);
});

//Update City

router.post("/stats/edit/:id", async (req, res) => {
  let companyStats = await CompanyStats.findById({ _id: req.params.id });
  companyStats.certifiedCountries = req.body.certifiedCountries;
  companyStats.successfulTours = req.body.successfulTours;
  companyStats.happyTravellers = req.body.happyTravellers;
  companyStats.googleReviewCount = req.body.googleReviewCount;
  companyStats.googleReviewRating = req.body.googleReviewRating;
  companyStats.save();
  res.json({ companyStats: companyStats }).status(200);
});

module.exports = router;
