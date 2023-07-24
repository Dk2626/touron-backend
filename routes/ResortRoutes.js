const mongoose = require('mongoose');

const express = require('express');

const router = express.Router();

const Resort = mongoose.model('Resort');

// Create a new item
router.post('/resorts', async (req, res) => {
  try {
    const newItem = new Resort(req.body);
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create item' });
  }
});

// Read all items
router.get('/resorts', async (req, res) => {
  try {
    const resorts = await Resort.find();
    res.json(resorts);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve items' });
  }
});

// Read a specific item by ID
router.get('/resorts/:id', async (req, res) => {
  try {
    const itemId = req.params.id;
    const item = await Resort.findById(itemId);
    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve the item' });
  }
});

// Update an item by ID
router.put('/resorts/:id', async (req, res) => {
  //   let resort = await Resort.findById({ _id: req.params.id });
  //   resort.cityName = req.body.cityName;
  //   resort.cost = req.body.cost;
  //   resort.countryName = req.body.countryName;
  //   resort.file = req.body.file;
  //   resort.finePrint = req.body.finePrint;
  //   resort.loveMeter = req.body.loveMeter;
  //   resort.offerPercent = req.body.offerPercent;
  //   resort.overview = req.body.overview;
  //   resort.inclusion = req.body.inclusion;
  //   resort.paymentLink = req.body.paymentLink;
  //   resort.priority = req.body.priority;
  //   resort.ratings = req.body.ratings;
  //   resort.resortAwards = req.body.resortAwards;
  //   resort.resortName = req.body.resortName;
  //   resort.stayFrom = req.body.stayFrom;
  //   resort.travelByMonth = req.body.travelByMonth;
  //   resort.stayTill = req.body.stayTill;
  //   resort.resortRules = req.body.resortRules;
  //   resort.restaurants = req.body.restaurants;
  //   resort.resortImages = req.body.resortImages;
  //   resort.resortFeatures = req.body.resortFeatures;
  //   resort.resortCategory = req.body.resortCategory;
  //   resort.save();
  //   res.send(resort).status(200);
  try {
    const itemId = req.params.id;
    //   const { name, description } = req.body;
    const updatedItem = await Resort.findByIdAndUpdate(itemId, req.body, {
      new: true,
    });
    if (!updatedItem) {
      return res.status(404).json({ error: 'Item not found' });
    }
    res.json(updatedItem);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update the item' });
  }
});

// Delete an item by ID
router.delete('/resorts/:id', async (req, res) => {
  try {
    const itemId = req.params.id;
    const deletedItem = await Resort.findByIdAndDelete(itemId);
    if (!deletedItem) {
      return res.status(404).json({ error: 'Item not found' });
    }
    res.json({ message: 'Item deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete the item' });
  }
});

module.exports = router;
