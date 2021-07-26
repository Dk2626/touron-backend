const mongoose = require("mongoose");

const express = require("express");

const router = express.Router();

const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: { fieldSize: 1024 * 1024 * 6 },
  fileFilter: fileFilter,
});

const Country = mongoose.model("Country");

// get City
router.get("/country", async (req, res) => {
  if (req.query.page && req.query.pageSize) {
    const pageSize = parseInt(req.query.pageSize);
    const page = parseInt(req.query.page);

    const country = await Country.find()
      .skip((page - 1) * pageSize)
      .limit(pageSize);
    console.log("City route called", country.length);

    res.send(country);
  } else {
    const country = await Country.find();

    console.log("City route called", country.length);

    res.send(country);
  }
});

router.get("/country/:name", async (req, res) => {
  console.log(req.params);
  const country = await Country.find({ countryName: req.params.name });
  res.send(country);
});

//Post city
router.post("/country", async (req, res) => {
  try {
    const country = new Country(req.body);
    console.log(`country`, country);
    await country.save();
    res.json({ country: country });
  } catch (err) {
    res.send(err);
  }
});
router.post(
  "/countrys",
  upload.single("countryImage"),

  async (req, res) => {
    let country = new Country();
    country.countryName = req.body.countryName;
    country.aboutCountry = req.body.aboutCountry;
    country.imageUrl = req.body.imageUrl;
    country.weather = req.body.weather;
    country.idealDays = req.body.idealDays;
    country.bestPlaces = req.body.bestPlaces;
    country.countryFlagImage = req.body.countryFlagImage;
    country.visa = {
      onArrival: req.body.onArrival,
      cost: req.body.cost,
    };
    country.general = {
      currency: req.body.currency,
      timeZone: req.body.timeZone,
      bestTimeToVisit: req.body.bestTimeToVisit,
    };
    country.countryImage = `https://touron-api.herokuapp.com/${req.file.path}`;
    console.log(`req.body`, req.body);
    console.log(`req.body`, country);
    console.log(`req.body`, req.file);
    country.save();
    res.send("success");
  }
);

//single city to edit
router.get("/country/edit/:id", async (req, res) => {
  console.log(req.body);
  const country = await Country.findById({ _id: req.params.id });
  res.send(country);
});
router.get("/country/:id", async (req, res) => {
  console.log(req.body);
  const country = await Country.findById({ _id: req.params.id });
  res.send(country);
});

// Update City

router.post("/country/edit/:id", async (req, res) => {
  // console.log(`running`);
  // console.log(`req.file`, req.file);
  // console.log(`req.body`, req.body);

  let country = await Country.findById({ _id: req.params.id });
  console.log(req.body);

  country.countryName = req.body.countryName;
  country.aboutCountry = req.body.aboutCountry;
  country.imageUrl = req.body.imageUrl;
  country.weather = req.body.weather;
  country.idealDays = req.body.idealDays;
  country.bestPlaces = req.body.bestPlaces;
  country.countryFlagImage = req.body.countryFlagImage;
  // country.countryImage = req.file.path;
  country.visa = {
    onArrival: req.body.onArrival,
    cost: req.body.cost,
  };
  country.general = {
    currency: req.body.currency,
    timeZone: req.body.timeZone,
    bestTimeToVisit: req.body.bestTimeToVisit,
  };
  console.log(country);
  country.save();
  res.json({ country: country });
});

//Delete by id

router.post("/country/delete/:id", async (req, res) => {
  const country = await Country.findByIdAndDelete({ _id: req.params.id });
  res.send(country);
});

module.exports = router;
