const express = require("express");
const router = express.Router();
const { auth } = require("../middleware/auth");
const { createHouse, getHouses } = require("../controllers/houseController");

router.post("/", auth, createHouse);
router.get("/", getHouses);

module.exports = router;
