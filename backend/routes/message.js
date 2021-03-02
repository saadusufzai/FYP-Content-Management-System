const Router = require("express");
const Contact = require("../models/Contact.model");

const router = Router.Router();

/**
 * @route   GET api/contact
 * @desc    Get all contact
 * @access  Private
 */

router.get("/", async (req, res) => {
  try {
    const contact = await Contact.find();
    if (!contact) throw Error("No users exist");
    res.json(contact);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});



module.exports = router