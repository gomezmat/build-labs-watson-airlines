const Airport = require("../models/Airport");

async function index(req, res) {
  try {
    const airports = await Airport.find({});
    return res.json({ airports });
  } catch (error) {
    return res.status(500).json({ error: "Error" });
  }
}

module.exports = {
  index,
};
