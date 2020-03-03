const express = require("express");

const router = express.Router();

const tableController = require("../controller/table");
const bookingController = require("../controller/booking");

//GET
router.get("/", tableController.getAllTables);
router.get("/:id/bookings", tableController.getTableDetail);

// //POST
router.post("/:id/booking", tableController.reserveTable);
module.exports = router;
