require("dotenv").config();

const path = require("path");
const mongo = require("./sample.mongodb");
const routes = require("./routes");
const APP_PORT = 3000;
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routes(app);

app.listen(APP_PORT, () => {
  console.log(`\n[Express] Servidor corriendo en el puerto ${APP_PORT}.`);
  console.log(`[Express] Ingresar a http://localhost:${APP_PORT}.\n`);
});

async function main() {
  // Get global variables from .env file
  require("dotenv").config({ path: path.resolve(__dirname, ".env") });

  // Connect to database
  const { create_connection } = mongo;
  await create_connection();
  // ...
}

main();
