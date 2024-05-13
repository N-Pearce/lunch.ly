/** Start server for Lunchly. */
const dotenv = require("dotenv").config();
const app = require("./app");

const PG_PASSWORD = process.env.PASSWORD;

app.listen(3503, function() {
  console.log("listening on 3500");
});