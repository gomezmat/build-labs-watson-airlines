const { mongoose, Schema } = require("../sample.mongodb");

const flightSchema = new Schema({
  AIRLINE: String,
  FLIGHT_NUMBER: Number,
  ORIGIN_AIRPORT: String,
  DESTINATION_AIRPORT: String,
  CANCELLED: Boolean,
  DEPARTURE_DATE: Date,
  ARRIVAL_DATE: Date,
});

flightSchema.methods.toJSON = function () {
  const flight = this.toObject();
  flight.id = flight._id.toString();
  delete flight._id;
  return flight;
};

const Flight = mongoose.model("Flight", flightSchema);

module.exports = Flight;
