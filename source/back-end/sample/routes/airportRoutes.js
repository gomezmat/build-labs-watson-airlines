const express = require("express");
const router = express.Router();

const airportController = require("../controllers/airportController");

router.get("/", airportController.index);

module.exports = router;
