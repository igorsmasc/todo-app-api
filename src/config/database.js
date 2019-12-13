const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

module.exports = mongoose.connect(
  "mongodb+srv://admin:admin@cluster0-lkefb.mongodb.net/test?retryWrites=true&w=majority"
);
