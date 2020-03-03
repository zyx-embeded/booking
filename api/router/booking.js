const express = require("express");
const bookingController = require("../controller/booking");

const router = express.Router();

// //PUT
router.put("/bookings/:id", bookingController.editReservedTable);

// //DELETE
router.delete("/booking/:id", bookingController.deleteReservedTable);
module.exports = router;
