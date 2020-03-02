const express = require("express");

const config = require("./config/env").config;
const setupDB = require("./config/db").setup;

const tableRoute = require("./api/router/booking");
const bookingsRoute = require("./api/router/table");

const app = express();

const port = process.env.PORT;
const url = process.env.URL;

setupDB(url);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/table", tableRoute);
app.use("/bookings", bookingsRoute);

app.listen(port, function() {
  console.log(`Example app is listening on ${port}`);
});
