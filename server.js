// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const invoiceRoutes = require("./routes/invoiceRoutes");
const customerVendorRoutes = require("./routes/customerVendorRoutes");
const bankRoutes = require("./routes/bankRoutes");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection failed:", err));

// API Routes
app.use("/api/invoices", invoiceRoutes);
app.use("/api/customers-vendors", customerVendorRoutes);
app.use("/api/bank-details", bankRoutes);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
