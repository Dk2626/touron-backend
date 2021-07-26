const mongoose = require("mongoose");

const express = require("express");

const router = express.Router();

const Place = mongoose.model("Place");

router.get("/place", async (req, res) => {
  const place = await Place.find();
  console.log("Place route called");
  res.send(place);
});

router.get("/place/:id", async (req, res) => {
  console.log(req.params, "id vanthuruchu");
  const place = await Place.find({ cityId: req.params.id });
  res.send(place);
});
router.post("/place", async (req, res) => {
  try {
    const {
      name,
      coordinates,
      description,
      journeyType,
      cost,
      cityId,
    } = req.body;
    console.log(name, coordinates, description, journeyType, cost, cityId);
    const place = new Place({
      name,
      coordinates,
      description,
      journeyType,
      cost,
      cityId,
    });

    await place.save();
    res.send("Saved Succesfully").status(200);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
