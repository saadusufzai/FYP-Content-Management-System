const nodemailer = require("nodemailer");
const Router = require("express");


const router = Router.Router();


router.post('/send', function(req, res) {
  

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
  
  transporter.sendMail({
    to: `${req.to}`,
    subject: "Registration For Writing Blogs",
    cc:`saadusufzai@gmail.com`,
    text: `Dear ${req.body.user}\n
    Thanks For registration on EPO Blogs.\n 
    This is an automatically generated email
    We will soon get back to you\n
    \n
    \n\n
    Best Regards\n
    EPO Admin`,
  }).then(res=>{
    console.log(res.messageId, 'Mail send')
    
  }).catch(err=>console.log(err));
  res.json({ message: "An Email has been sent"})
  
  })


module.exports = router