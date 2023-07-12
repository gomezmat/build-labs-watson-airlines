const express = require("express");
const router = express.Router();
const airlineController = require("../controllers/airlineController");

router.get("/", airlineController.index);

module.exports = router;
