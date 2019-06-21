const mongoose = require("mongoose");

//Load User model
const Item = require("../models/menuItem");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/restaurant");

const itemsSeed = [
  {
    name: "Burger",
    ingredients: "sesame seed bun, beef patty",
    description: "A classic sandwich favorite, customized to order.",
    price : 8.0
  }
];

Item.remove({})
  .then(() => Item.collection.insertMany(itemsSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });