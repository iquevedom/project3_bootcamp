// Schema for menu items
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuSchema = new Schema({
  name: { type: String, required: true },
  ingredients: { type: String, required: true },
  description: String,
  price : {
    type: Number,
    validate: [
      // Function takes in the new `longstring` value to be saved as an argument
      function(input) {
        // If this returns true, proceed. If not, return the error message below
        return input > 0;
      },
      // Error Message
      "Price must be a positive number."
    ]
  },
  type: String,
  startTime : Date,
  endTime : Date
});

const Menu = mongoose.model("menu-item", menuSchema);

module.exports = Menu;