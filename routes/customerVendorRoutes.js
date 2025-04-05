const express = require("express");
const router = express.Router();
const CustomerVendor = require("../models/CustomerVendor");

// Create
router.post("/", async (req, res) => {
  try {
    const newCV = new CustomerVendor(req.body);
    const saved = await newCV.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get All
router.get("/", async (req, res) => {
  try {
    const list = await CustomerVendor.find();
    res.json(list);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
