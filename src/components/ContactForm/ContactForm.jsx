import { Typography } from "@material-ui/core";
import React,{useState} from "react";
import Button from "@material-ui/core/Button";
import classes from "./ContactForm.module.css";
import TextField from "@material-ui/core/TextField";
import Input from '@material-ui/core/Input';
import img1 from "../../images/form/1.png";
import img2 from "../../images/form/2.png";
import img3 from "../../images/form/3.png";
import axios from 'axios'
import { toast } from 'react-toastify';


const ContactForm = ({ showText }) => {
  const [firstName,setFirstName] = useState();
  const [lastName,setLastName] = useState();
  const [email,setEmail] = useState();
  const [message,setMessage] = useState();
  const [datas, setData] = useState();
  const [open, setOpen] = useState(true);
  const handelSubmit = (e)=>{

    e.preventDefault();

    // Request body
    const data = JSON.stringify({
      firstName,
      lastName,
      email,
      message
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };

    axios
      .post("https://epo-backend.herokuapp.com/api/contact", data, config)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
        setOpen(false)
        toast.success("Message Sumbitted")
      })
      .catch((err) => {
        toast.error(err.response.data.msg, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
        console.log(err.response.data.msg)});
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
        {open? (
      <form onSubmit={handelSubmit} className={classes.contactForm}>
        <div className={classes.row}>
          <TextField
            style={{ marginRight: "10px" }}
            fullWidth
            required
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
          <Input
            label="Your Email Adress"
            placeholder="youremail@expample.com"
            multiline
            type="email"
            required
           
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
        <Button type='submit' onClick={handelSubmit} className={classes.btn} variant="outlined" color="primary">
          Send
        </Button>
        <div className={classes.bgImages}>
          <img className={classes.imgLeft} src={img3} alt="epo" />
          <img className={classes.imgRight1} src={img2} alt="epo" />
          <img className={classes.imgRight2} src={img1} alt="epo" />
        </div>
      </form>): (<h2 style={{textAlign:'center'}}>Thank You {firstName} for submitting your message </h2>)}
    </div>
  );
};

export default ContactForm;
