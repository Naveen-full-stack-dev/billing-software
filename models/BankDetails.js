const mongoose = require("mongoose");

const bankDetailSchema = new mongoose.Schema({
  bankName: { type: String, required: true },
  accountNumber: { type: String, required: true },
  ifscCode: String,
  branch: String,
  accountHolderName: String,
});

module.exports = mongoose.model("BankDetail", bankDetailSchema);
