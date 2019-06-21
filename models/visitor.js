// Schema for menu items
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const visitorSchema = new Schema({
  nameLast: { type: String, required: true },
  nameFirst: String,
  phone: Number,
  orders: [{}]
});

const Visitors = mongoose.model("visitor", visitorSchema);

module.exports = Visitors;