// Schema for menu items
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const visitorSchema = new Schema({
  nameLast: String,
  nameFirst: String,
  phone: {type: Number, required: true},
  orders: []
});

const Visitors = mongoose.model("visitor", visitorSchema);

module.exports = Visitors;