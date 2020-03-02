const mongoose = require("mongoose");

function setup(url) {
  mongoose.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
}
module.exports = {
  setup
};
