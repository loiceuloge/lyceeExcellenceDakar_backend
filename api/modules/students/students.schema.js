const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: { type: String },
  currentClasse: { type: String },
});

const model = mongoose.model("Student", StudentSchema);
module.exports = model;
