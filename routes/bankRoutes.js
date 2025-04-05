const express = require("express");
const router = express.Router();
const BankDetail = require("../models/BankDetail");

// Create
router.post("/", async (req, res) => {
  try {
    const newBank = new BankDetail(req.body);
    const saved = await newBank.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get All
router.get("/", async (req, res) => {
  try {
    const banks = await BankDetail.find();
    res.json(banks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
