// Schema for orders
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    totalCost: Number
});

const Orders = mongoose.model("order", orderSchema);

module.exports = Orders;