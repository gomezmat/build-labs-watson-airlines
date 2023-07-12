const { mongoose, Schema } = require("../sample.mongodb");

const airlineSchema = new Schema({
  IATA_CODE: String,
  AIRLINE: String,
});

airlineSchema.methods.toJSON = function () {
  const airline = this.toObject();
  airline.id = airline._id.toString();
  delete airline._id;
  return airline;
};

const Airline = mongoose.model("Airline", airlineSchema);

module.exports = Airline;
