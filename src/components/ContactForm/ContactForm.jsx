import { Typography } from "@material-ui/core";
import React from "react";
import Button from "@material-ui/core/Button";
import classes from "./ContactForm.module.css";
import TextField from "@material-ui/core/TextField";
import img1 from "../../images/form/1.png";
import img2 from "../../images/form/2.png";
import img3 from "../../images/form/3.png";

const ContactForm = ({ showText }) => {
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
            margin="dense"
          />
          <TextField
            fullWidth
            label="Last Name"
            placeholder="Last Name"
            multiline
            margin="dense"
          />
        </div>
        <div className={classes.row}>
          <TextField
            label="Your Email Adress"
            placeholder="youremail@expample.com"
            multiline
            fullWidth
          />
        </div>
        <div className={classes.row}>
          <TextField
            fullWidth
            label="Type Your Messege Here"
            placeholder="Write Here..."
            multiline
          />
        </div>
        <Button className={classes.btn} variant="outlined" color="primary">
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
