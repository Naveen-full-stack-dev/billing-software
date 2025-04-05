// models/Invoice.js
const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema({
  customerName: String,
  product: String,
  quantity: Number,
  price: Number,
  date: String,
});

module.exports = mongoose.model("Invoice", invoiceSchema);
