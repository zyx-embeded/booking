const express = require("express");

const config = require("./config/env").config;
const setupDB = require("./config/db").setupDB;

const tableRoute = require("./api/router/table");
const bookingsRoute = require("./api/router/booking");

const app = express();

const port = process.env.PORT;
const url = process.env.DATABASE;

setupDB(url);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/tables", tableRoute);
app.use("/bookings", bookingsRoute);

app.listen(port, function() {
  console.log(`Example app is listening on ${port}`);
});
