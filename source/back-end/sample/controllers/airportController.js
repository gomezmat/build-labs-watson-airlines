const Airport = require("../models/Airport");

async function index(req, res) {
  const airports = await Airport.find({});
  return res.json({ airports: airports });
}

module.exports = {
  index,
};
