const mongoose = require("mongoose");

const express = require("express");

const router = express.Router();

const fs = require("fs");

const _ = require("lodash");
const Banner = mongoose.model("Banner");

const formiddable = require("formidable");

router.post("/banner", (req, res) => {
  let form = new formiddable.IncomingForm();
  form.keepExtensions = true;

  form.parse(req, (err, fields, file) => {
    if (err) {
      return res.status(400).json({
        error: "Problem with image",
      });
    }

    let banner = new Banner(fields);

    if (file.photo) {
      if (file.photo.size > 3000000) {
        return res.status(400).json({
          error: "Image size too large",
        });
      }

      banner.photo.data = fs.readFileSync(file.photo.path);
      banner.photo.contentType = file.photo.type;
    }

    banner
      .save()
      .then((banner) => res.json(banner))
      .catch((err) =>
        res.status(400).json({
          error: "Image size too large",
        })
      );
  });
});

router.get("/banner", async (req, res) => {
  let banner = await Banner.find();
  //   console.log(banner[0]._id);
  res.send(banner);
});
router.get("/banner/:id", async (req, res) => {
  let banner = await Banner.find({ _id: req.params.id });
  res.send(banner);
});

router.post("/banner/delete/:id", async (req, res) => {
  console.log(req.params.id, "okokok");
  const banner = await Banner.findByIdAndDelete({ _id: req.params.id });
  res.send(banner);
});

// router.post("banner/update/:id", (req, res) => {
//   console.log(req.params.id, "okokefeok");

//   let form = new formiddable.IncomingForm();
//   form.keepExtensions = true;

//   form.parse(req, (err, fields, file) => {
//     if (err) {
//       return res.status(400).json({
//         error: "Problem with image",
//       });
//     }

//     let banner = Banner.findById({ _id: req.params.id });

//     banner = _.extend(banner, fields);

//     if (file.photo) {
//       if (file.photo.size > 3000000) {
//         return res.status(400).json({
//           error: "Image size too large",
//         });
//       }

//       banner.photo.data = fs.readFileSync(file.photo.path);
//       banner.photo.contentType = file.photo.type;
//     }

//     banner
//       .save()
//       .then((banner) => res.json(banner))
//       .catch((err) =>
//         res.status(400).json({
//           error: "save updation failerd",
//         })
//       );
//   });
// });

module.exports = router;
