const Router = require("express");
const Contact = require("../models/Contact.model");
const nodemailer = require("nodemailer");

const router = Router.Router();

const transporter = nodemailer.createTransport({
  
  service: "Gmail",
  auth: {
    type: "OAuth2",
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken: process.env.REFRESH_TOKEN,
  },
});






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

  transporter.sendMail({
    to: email,
    subject: "Contact Us Form EPO",
    cc:`saadusufzai@gmail.com`,
    text: `Dear ${firstName, lastName}\n
    Thanks for contacting us. Our team Member will soon contact you on the followning email address.\n 
    ${email}.
    Following is the Message you sent Us:
    ${message}\n\n\n
    This is an automatically generated email. Plese do not reply to this email address.
    We will soon get back to you
    \n
    \n
    \n
    \n
    Best Regards\n
    EPO Admin`,
  }).then(res=>{
    console.log(res.messageId, 'Contact Mail Send')
    
  }).catch(err=>console.log(err));

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