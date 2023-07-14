const Flight = require("../models/Flight");

async function showOne(req, res) {
  try {
    const flight = await Flight.findById(req.params.id);
    if (!flight) {
      return res.status(404).json({ error: "No flight found" });
    }
    return res.json({ flight });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error" });
  }
}

async function showDepartures(req, res) {
  try {
    const { originAirport, destinationAirport, arrivalDate } = req.query;
    const departures = await Flight.find({
      ORIGIN_AIRPORT: originAirport,
      DESTINATION_AIRPORT: destinationAirport,
      ARRIVAL_DATE: new Date(arrivalDate),
    });
    return res.json({ departures });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error" });
  }
}

module.exports = {
  showOne,
  showDepartures,
};
