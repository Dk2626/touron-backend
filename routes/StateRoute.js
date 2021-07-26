const mongoose = require("mongoose");

const express = require("express");

const router = express.Router();

const State = mongoose.model("State");

// get City
router.get("/state", async (req, res) => {
  if (req.query.page && req.query.pageSize) {
    const pageSize = parseInt(req.query.pageSize);
    const page = parseInt(req.query.page);
    const state = await State.find()
      .skip((page - 1) * pageSize)
      .limit(pageSize);
    console.log("state route called", state.length);
    res.send(state);
  } else {
    const state = await State.find();
    console.log("state route called", state.length);
    res.send(state);
  }
});

//Get City by Name

router.get("/state/:name", async (req, res) => {
  console.log(req.params);
  const state = await State.find({ stateName: req.params.name });
  res.send(state);
});

//Post city
router.post("/state", async (req, res) => {
  console.log("req.body", req.body);
  try {
    const state = new State(req.body);
    await state.save();
    res.json({ state: state });
  } catch (err) {
    res.send(err);
  }
});

//single city to edit
router.get("/state/edit/:id", async (req, res) => {
  console.log(req.body);
  const state = await State.findById({ _id: req.params.id });
  res.send(state);
});
// router.get("/state/:id", async (req, res) => {
//   console.log(req.body);
//   const state = await State.findById({ _id: req.params.id });
//   res.send(state);
// });

// Update City

router.post("/state/edit/:id", async (req, res) => {
  let state = await State.findById({ _id: req.params.id });
  console.log(req.body);

  state.stateName = req.body.stateName;
  state.aboutState = req.body.aboutState;
  state.imageUrl = req.body.imageUrl;
  state.bestTimeToVisit = req.body.bestTimeToVisit;
  state.bestPlaces = req.body.bestPlaces;

  console.log(state);
  state.save();
  res.json({ state: state });
});

//Delete by id

router.post("/state/delete/:id", async (req, res) => {
  const state = await State.findByIdAndDelete({ _id: req.params.id });
  const states = await State.find();
  res.send(states);
});

module.exports = router;
