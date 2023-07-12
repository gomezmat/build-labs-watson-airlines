const { mongoose, Schema } = require("../sample.mongodb");

const airportSchema = new Schema({
  IATA_CODE: String,
  AIRPORT: String,
  CITY: String,
  STATE: String,
  COUNTRY: String,
});

airportSchema.methods.toJSON = function () {
  const airport = this.toObject();
  airport.id = airport._id.toString();
  delete airport._id;
  return airport;
};

const Airport = mongoose.model("Airport", airportSchema);

module.exports = Airport;
