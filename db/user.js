const mongoose = require("mongoose");
const Schema = mongoose.Schema;

function userSchema() {
  let userSchema = new Schema(
    {
      name: { type: String }
    },
    {
      versionKey: false
    }
  );
}

module.exports = {
  userSchema
};
