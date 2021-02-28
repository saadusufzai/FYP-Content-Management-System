import { Typography } from "@material-ui/core";
import React from "react";
import classes from "./ContactForm.module.css";
import TextField from '@material-ui/core/TextField';
const ContactForm = () => {

  return (
    <div className={classes.form}>
      <Typography>Facing Problem?</Typography>
      <Typography>Lets Get In Touch Now</Typography>
      <div className={classes.contactForm}>
        <div className={classes.row}>
        <TextField
          id="standard-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
        />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
