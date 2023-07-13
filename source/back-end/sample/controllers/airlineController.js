const Airline = require("../models/Airline");

async function index(req, res) {
  const airlines = await Airline.find({});
  res.json({ airlines: airlines });
}

module.exports = {
  index,
};
