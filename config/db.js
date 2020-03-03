const mongoose = require("mongoose");

module.exports.setupDB = function(url) {
  mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
};
