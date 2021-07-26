const mongoose = require("mongoose");

const express = require("express");

const router = express.Router();

const DomesticCity = mongoose.model("DomesticCity");

// get City
router.get("/statecity", async (req, res) => {
  if (req.query.page && req.query.pageSize) {
    const pageSize = parseInt(req.query.pageSize);
    const page = parseInt(req.query.page);
    const stateCity = await DomesticCity.find()
      .skip((page - 1) * 10)
      .limit(pageSize);
    console.log("City route called");
    res.send(stateCity);
  } else {
    const stateCity = await DomesticCity.find();
    console.log("City route called");
    res.send(stateCity);
  }
});

//Get City by Name

router.get("/statecity/statename/:name", async (req, res) => {
  console.log(req.params);
  const stateCity = await DomesticCity.find({ stateName: req.params.name });
  res.send(stateCity);
});

router.get("/statecity/statecityname/:name", async (req, res) => {
  console.log(req.params);
  const stateCity = await DomesticCity.find({ cityName: req.params.name });
  res.send(stateCity);
});

//Post city
router.post("/statecity", async (req, res) => {
  try {
    // const { name, coordinates, description, journeyType ,imageUrl} = req.body;
    // console.log(name, coordinates, description, journeyType);
    console.log(req.body);
    const stateCity = new DomesticCity(req.body);

    await stateCity.save();
    res.json({ stateCity: stateCity }).status(200);
  } catch (err) {
    res.send(err);
  }
});

//single city to edit
router.get("/statecity/edit/:id", async (req, res) => {
  const statecity = await DomesticCity.findById({ _id: req.params.id });
  res.send(statecity);
});

// Update City

router.post("/statecity/edit/:id", async (req, res) => {
  let stateCity = await DomesticCity.findById({ _id: req.params.id });
  console.log(req.body);
  stateCity.cityName = req.body.cityName;
  stateCity.suggestedCombinations = req.body.suggestedCombinations;
  stateCity.countryName = req.body.countryName;
  stateCity.stateName = req.body.stateName;
  stateCity.aboutCity = req.body.aboutCity;
  stateCity.imageUrl = req.body.imageUrl;
  stateCity.idealDays = req.body.idealDays;
  stateCity.weather = req.body.weather;
  stateCity.famousPlacesToVisit = req.body.famousPlacesToVisit;
  (stateCity.coordinates = {
    latitude: req.body.latitude,
    longitude: req.body.longitude,
  }),
    (stateCity.travelDuration = req.body.travelDuration);
  stateCity.airportType = req.body.airportType;
  stateCity.airportName = req.body.airportName;
  stateCity.foodJoints = req.body.foodJoints;
  stateCity.cityTips = req.body.cityTips;
  stateCity.thingsToPack = req.body.thingsToPack;
  stateCity.documentsRequired = req.body.documentsRequired;
  console.log(stateCity);
  stateCity.save().then(async () => {
    const stateCitys = await DomesticCity.find();
    console.log("City route called");
    res.send(stateCitys).status(200);
  });
  // res.json({ stateCity: stateCity }).status(200);
});

//Delete by id

router.post("/statecity/delete/:id", async (req, res) => {
  const stateCity = await DomesticCity.findByIdAndDelete({
    _id: req.params.id,
  });
  res.send(stateCity);
});

module.exports = router;
