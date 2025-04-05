const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["Sale Invoice", "Quotation", "Purchase Invoice", "Delivery Challan", "Purchase Order", "Sale Order", "Proforma", "Inward Payment", "Outward Payment", "Expense", "Bank"],
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  description: String,
  date: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model("Transaction", transactionSchema);
