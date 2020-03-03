const mongoose = require("mongoose");
const bookingSchema = new mongoose.Schema(
  {
    startTime: {
      type: "Date",
      required: true
    },
    endTime: {
      type: "Date",
      required: true
    },
    tableId: {
      type: mongoose.Schema.ObjectId,
      ref: "Table",
      required: "You must supply table ID"
    },
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: "You must supply user ID"
    }
  },
  {
    versionKey: false
  }
);
module.exports = mongoose.model("Booking", bookingSchema);
