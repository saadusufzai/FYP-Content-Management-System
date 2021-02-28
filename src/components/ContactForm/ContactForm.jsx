import { Typography } from "@material-ui/core";
import React from "react";
import Button from '../Button/Button'
import classes from "./ContactForm.module.css";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      
    },
  },
}));

const ContactForm = () => {
    const style = useStyles()
  return (
    <div className={style.root}>
      <div className={classes.text}>
        <Typography variant="h4" align="center">
          Facing Problem?
        </Typography>
        <Typography variant="h4" align="center">
          Lets Get In Touch Now
        </Typography>
      </div>

      {/* form */}
      <div className={classes.contactForm}>
        <div className={classes.row}>
          <TextField
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
        <Button link={'#'} text={'Send'}/>
      </div>
    </div>
  );
};

export default ContactForm;
