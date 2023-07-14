const Airline = require("../models/Airline");

async function index(req, res) {
  try {
    const airlines = await Airline.find({});
    res.json({ airlines });
  } catch (error) {
    res.status(500).json({ error: "Error" });
  }
}

module.exports = {
  index,
};
