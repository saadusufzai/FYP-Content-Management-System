import { Typography } from "@material-ui/core";
import React,{useState} from "react";
import Button from "@material-ui/core/Button";
import classes from "./ContactForm.module.css";
import TextField from "@material-ui/core/TextField";
import img1 from "../../images/form/1.png";
import img2 from "../../images/form/2.png";
import img3 from "../../images/form/3.png";
import axios from 'axios'

const ContactForm = ({ showText }) => {
  const [firstName,setFirstName] = useState();
  const [lastName,setLastName] = useState();
  const [email,setEmail] = useState();
  const [messages,setMessage] = useState();
  const [data, setData] = useState();
  
  const handelSubmit = (e)=>{

    e.preventDefault();

    // Request body
    const message = JSON.stringify({
      firstName,
      lastName,
      email,
      messages
    });

    // Headers
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };
    // 
    axios
      .post("http://localhost:5000/api/contact", message, config)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
        alert.success("Thank you! Your Squad is Registered!");
        setTimeout(() => {
          window.location = "/";
        }, 2000);
      })
      .catch((err) => console.log(err));
  };

  

  
  return (
    <div className={classes.form}>
      {showText ? (
        <div className={classes.text}>
          <Typography variant="h4" align="center">
            Facing Problem?
          </Typography>
          <Typography variant="h4" align="center">
            Lets Get In Touch Now
          </Typography>
        </div>
      ) : (
        <Typography variant="h3" align="center">
          Contact Us
        </Typography>
      )}
      {/* form */}

      <div className={classes.contactForm}>
        <div className={classes.row}>
          <TextField
            style={{ marginRight: "10px" }}
            fullWidth
            label="First Name"
            placeholder="First Name"
            multiline
            onChange={(e)=>setFirstName(e.target.value)}
            margin="dense"
          />
          <TextField
            fullWidth
            label="Last Name"
            placeholder="Last Name"
            multiline
            margin="dense"
            onChange={(e)=>setLastName(e.target.value)}
          />
        </div>
        <div className={classes.row}>
          <TextField
            label="Your Email Adress"
            placeholder="youremail@expample.com"
            multiline
            fullWidth
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div className={classes.row}>
          <TextField
            fullWidth
            label="Type Your Messege Here"
            placeholder="Write Here..."
            multiline
            onChange={(e)=>setMessage(e.target.value)}
          />
        </div>
        <Button onClick={(e)=>handelSubmit(e)} className={classes.btn} variant="outlined" color="primary">
          Send
        </Button>
        <div className={classes.bgImages}>
          <img className={classes.imgLeft} src={img3} alt="epo" />
          <img className={classes.imgRight1} src={img2} alt="epo" />
          <img className={classes.imgRight2} src={img1} alt="epo" />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
