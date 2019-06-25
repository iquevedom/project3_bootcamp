const mongoose = require("mongoose");

//Load User model
const Item = require("../models/visitor");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/restaurant");

const itemsSeed = [
  {
    nameLast: "Lane",
    nameFirst: "Shelly",
    phone: 4807051227
  },
  {
    nameLast: "Shea",
    nameFirst: "Austin",
    phone: 4808675309
  },
  {
    nameLast: "Beauchamp",
    nameFirst: "Tucker",
    phone: 4807652222
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
