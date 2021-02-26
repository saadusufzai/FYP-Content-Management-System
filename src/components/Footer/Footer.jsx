import React from "react";
import classes from "./Footer.module.css";

import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import LanguageIcon from "@material-ui/icons/Language";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.innerFooter}>
        {/* Contact */}
        <ul className={classes.feild}>
          <h3>Contact Us</h3>
          <li>
            <PhoneIcon /> +92-333-6573418
          </li>
          <li>
            <EmailIcon /> info@epo.org.pk
          </li>
          <li>
            <LanguageIcon /> www.epo.org.pk
          </li>
        </ul>
        {/* Links */}
        <ul className={classes.feild}>
          <h3>Our Organization</h3>
          <li><Link to='/about'>About</Link> </li>
          <li><Link to='/gallery'>Gallery</Link> </li>
          <li><Link to='/blog'>Blog</Link> </li>
          <li><Link to='/contact'>Contact</Link> </li>
          <li><Link to='/donate'>Donate</Link> </li>
        </ul>
        {/* Social Contacts */}
        <ul className={classes.feild}>
          <h3>Contact Us</h3>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">YouTube</a></li>
          <li><a href="#">LinkedIn</a></li>
          <li><a href="#">Skype</a></li>
        </ul>
        {/* Address */}
        <ul style={{ width:'30%'}} className={classes.feild}>
          <h3>Address</h3>
          <li >
             EPO Office, 2nd Floor Nasir Hospital, Bhakkar, Punjab Pakistan</li>
             <h3>Follow Us</h3>
             <FacebookIcon color="primary"/>
             <TwitterIcon color="#1111"/>
             <YouTubeIcon color="secondary"/>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
