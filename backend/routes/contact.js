const Router = require("express");
const Contact = require("../models/Contact.model");

const router = Router.Router();

/**
 * @route   POST /contact
 * @desc    Register new user
 * @access  Public
 */

router.post("/", async (req, res) => {
  const { firstName, lastName, email, message } = req.body;

  // Validation

  if (!firstName || !email || !message) {
    return res.status(400).json({ msg: "Please enter all feilds" });
  }

  try{


  const newContact = new Contact({
    firstName,
    lastName,
    email,
    message,
  });

  const savedContact = await newContact.save();
  if (!savedContact) {
    throw Error("Something went wrong saving the contact");
  }

  res.status(200).json({
    user: {
      id: savedContact._id,
      name: savedContact.firstName,
      email: savedContact.email,
      message: savedContact.message,
    },
  });

}catch(err){
  res.status(400).json({ error: err.message });
}

});


module.exports = router