const express = require("express");

const router = express.Router();

//GET
router.get("/");
router.get("/:id/bookings");

//POST
router.post("/:id/booking");
