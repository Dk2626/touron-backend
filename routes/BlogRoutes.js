const mongoose = require("mongoose");

const express = require("express");

const router = express.Router();

const Blog = mongoose.model("Blog");

// get City
router.get("/blog", async (req, res) => {
  console.log(req.query);
  if (req.query.page && req.query.pageSize) {
    const pageSize = parseInt(req.query.pageSize);
    const page = parseInt(req.query.page);

    const blog = await Blog.find()
      .sort({ createdAt: -1 })
      .skip((page - 1) * pageSize)
      .limit(pageSize);
    console.log("Blog route called", blog.length);

    res.send(blog);
  } else {
    console.log("Blog route called");
    const blog = await Blog.find().sort({ createdAt: -1 });
    res.send(blog);
  }
});

router.get("/blog/search", async (req, res) => {
  const pageSize = parseInt(req.query.pageSize);
  const page = parseInt(req.query.page);

  const blog = await Blog.find()
    .select({
      _id: 1,
      blogTitle: 1,
      imageSrc: 1,
      content: 1,
      createdAt: 1,
      updatedAt: 1,
      countryName: 1,
      writtenBy: 1,
    })
    .sort({ createdAt: -1 })
    .skip((page - 1) * pageSize)
    .limit(pageSize);
  console.log("Blog route called", blog.length);

  res.send(blog);
});
router.get("/blogcount", async (req, res) => {
  console.log("Blog route called");
  const blog = await Blog.countDocuments();
  console.log(`blog`, blog);
  res.json({ count: blog }).status(200);
});

//Post city
router.post("/blog", async (req, res) => {
  try {
    console.log(req.body);
    const blog = new Blog(req.body);

    await blog.save();
    res.json({ blog: blog }).status(200);
  } catch (err) {
    res.send(err);
  }
});

router.get("/blog/edit/:id", async (req, res) => {
  console.log(req.params.id);
  const blog = await Blog.findById({ _id: req.params.id });
  console.log(blog);
  res.send(blog);
});
//single city to edit

//Update City

router.post("/blog/edit/:id", async (req, res) => {
  let blog = await Blog.findById({ _id: req.params.id });
  console.log(req.body);

  blog.blogTitle = req.body.blogTitle;
  blog.imageSrc = req.body.imageSrc;
  blog.imageCredit = req.body.imageCredit;
  blog.content = req.body.content;
  blog.countryName = req.body.countryName;
  blog.cityName = req.body.cityName;
  blog.keywords = req.body.keywords;
  blog.subHeading1 = req.body.subHeading1;
  blog.imageSrc1 = req.body.imageSrc1;
  blog.imageCredit1 = req.body.imageCredit1;

  blog.content1 = req.body.content1;
  blog.subHeading2 = req.body.subHeading2;
  blog.imageSrc2 = req.body.imageSrc2;
  blog.imageCredit2 = req.body.imageCredit2;

  blog.content2 = req.body.content2;
  blog.subHeading3 = req.body.subHeading3;
  blog.imageSrc3 = req.body.imageSrc3;
  blog.imageCredit3 = req.body.imageCredit3;

  blog.content3 = req.body.content3;
  blog.subHeading4 = req.body.subHeading4;
  blog.imageSrc4 = req.body.imageSrc4;
  blog.imageCredit4 = req.body.imageCredit4;

  blog.content4 = req.body.content4;
  blog.subHeading5 = req.body.subHeading5;
  blog.imageSrc5 = req.body.imageSrc5;
  blog.imageCredit5 = req.body.imageCredit5;

  blog.content5 = req.body.content5;
  blog.subHeading6 = req.body.subHeading6;
  blog.imageSrc6 = req.body.imageSrc6;
  blog.imageCredit6 = req.body.imageCredit6;

  blog.content6 = req.body.content6;
  blog.writtenBy = req.body.writtenBy;

  // blog.save().then(async () => {
  //   const blogData = await Blog.find();
  //   res.json({ blog: blogData }).status(200);
  // });
  blog.save();
  res.send(blog).status(200);
});

//Delete by id

router.post("/blog/delete/:id", async (req, res) => {
  const blog = await Blog.findByIdAndDelete({ _id: req.params.id });
  res.send(blog);
});

module.exports = router;
