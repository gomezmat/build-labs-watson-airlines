const Flight = require("../models/Flight");

async function showOne(req, res) {
  const flight = await Flight.findById(req.params.id);
  return res.json({ flight: flight });
}

async function showDepartures(req, res) {
  const originAirport = req.query.originAirport;
  const destinationAirport = req.query.destinationAirport;
  const arrivalDate = new Date(req.query.arrivalDate);
  try {
    const departures = await Flight.find({
      ORIGIN_AIRPORT: originAirport,
      DESTINATION_AIRPORT: destinationAirport,
      ARRIVAL_DATE: arrivalDate,
    });
    return res.json({ departures: departures });
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  showOne,
  showDepartures,
};
