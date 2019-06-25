// Schema for orders
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    items: [],
    totalCost: Number,
    owner: { type: Schema.Types.ObjectId, ref: "Visitors", required: true },
    date: { type: Date, default: Date.now },
    fulfilled: { type: Boolean, default: false }
});

const Orders = mongoose.model("order", orderSchema);

module.exports = Orders;