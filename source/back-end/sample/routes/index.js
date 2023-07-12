const publicRoutes = require("./publicRoutes");
const flightRoutes = require("./flightRoutes");
const airlineRoutes = require("./airlineRoutes");
const airportRoutes = require("./airportRoutes");

module.exports = (app) => {
  app.use("/", publicRoutes);
  app.use("/flights", flightRoutes);
  app.use("/airlines", airlineRoutes);
  app.use("/airports", airportRoutes);
};
