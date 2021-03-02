  
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: false },
    email: { type: String, required: false },
    password: { type: String, required: false },
    register_date: { type: Date, default: Date.now },
  },
 
);

const User = mongoose.model("users", userSchema);
module.exports = User;