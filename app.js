const express = require("express");
const app = express();

const config = require("./config/env").config;

const port = process.env.PORT;
const url = process.env.URL;

app.get("/", (req, res) => res.send("Hello World"));

app.listen(port, function() {
  console.log(`Example app is listening on ${port}`);
});
