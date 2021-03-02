  
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: false },
    email: { type: String, required: false },
    message: { type: String, required: false },
    register_date: { type: Date, default: Date.now },
  },
 
);

const Contact = mongoose.model("contact", contactSchema);
module.exports = Contact;