const mongoose = require("mongoose");

const customerVendorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, enum: ["customer", "vendor"], required: true },
  email: String,
  phone: String,
  address: String,
  gstNumber: String,
  panNumber: String,
});

module.exports = mongoose.model("CustomerVendor", customerVendorSchema);
