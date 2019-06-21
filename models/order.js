// Schema for orders
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    totalCost: { type: Number, required: true },
    // Get this working, auto-fill today's date
    date: { type: Date, default: Date().now },
});

const Orders = mongoose.model("order", orderSchema);

module.exports = Orders;