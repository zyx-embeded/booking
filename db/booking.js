const mongoose = require("mongoose");
const Schema = mongoose.Schema;

function bookingSchema() {
  let bookingSchema = new Schema(
    {
      userId: { type: String },
      tableId: { type: String },
      startTime: { type: Date },
      endTime: { type: Date }
    },
    {
      versionKey: false
    }
  );
}

module.exports = {
  bookingSchema
};
