// routes/listings.js
const express = require("express");
const Listing = require("../models/Listing");
const router = express.Router();
// GET /api/listing - Fetch all listings
router.get("/listing", async (req, res) => {
  try {
    const listings = await Listing.find();
    res.json(listings);
  } catch (error) {
    console.error("Error fetching listings:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching listings" });
  }
});
module.exports = router;
