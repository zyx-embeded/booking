const mongoose = require("mongoose");
const Schema = mongoose.Schema;

function tableSchema() {
  let tableSchema = new Schema(
    {
      name: { type: String },
      status: { type: Boolean }
    },
    {
      versionKey: false
    }
  );
}

module.exports = {
  tableSchema
};
