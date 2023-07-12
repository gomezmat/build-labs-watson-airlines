const express = require("express");
const router = express.Router();

const flightController = require("../controllers/flightController");

router.get("/departures", flightController.showDepartures);
router.get("/:id", flightController.showOne);

// buscar vuelos por origen

// buscar vuelos por destino

module.exports = router;
