const express = require("express");
const router = express.Router();
const { auth } = require("../middleware/auth");
const {
  createBooking,
  updateBooking,
} = require("../controllers/bookingController");

router.post("/", auth, createBooking);
router.put("/:id", auth, updateBooking);

module.exports = router;
