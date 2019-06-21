// Schema for visitor data
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const visitorSchema = new Schema({
  nameLast: String,
  nameFirst: String,
  phone: { type: Number, required: true }
});

const Visitors = mongoose.model("visitor", visitorSchema);

module.exports = Visitors;