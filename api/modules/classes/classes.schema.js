const mongoose = require("mongoose");

const ClassesSchema = new mongoose.Schema({
  name: { type: String },
});

const model = mongoose.model("Classes", ClassesSchema);
module.exports = model;
