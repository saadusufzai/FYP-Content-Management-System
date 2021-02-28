import React from "react";
import classes from "./Footer.module.css";

import logo from '../../images/logo.jpg';

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
      <img classname={classes.logo} src={logo} alt="epo logo"/>
      <div className={classes.innerFooter}>
        {/* Contact */}
        <ul className={classes.contact}>
          <h5>Contact Us</h5>
          <li>
            <PhoneIcon fontSize='small' className={classes.icon} /> +92-333-6573418
          </li>
          <li>
            <EmailIcon fontSize='small' className={classes.icon} /> info@epo.org.pk
          </li>
          <li>
            <LanguageIcon fontSize='small' className={classes.icon} /> www.epo.org.pk
          </li>
        </ul>
        {/* Links */}
        <ul className={classes.feild}>
          <h5>Our Organization</h5>
          <li><Link to='/about'>About</Link> </li>
          <li><Link to='/gallery'>Gallery</Link> </li>
          <li><Link to='/blog'>Blog</Link> </li>
          <li><Link to='/contact'>Contact</Link> </li>
          <li><Link to='/donate'>Donate</Link> </li>
        </ul>
        {/* Social Contacts */}
        <ul className={classes.feild}>
          <h5>Contact Us</h5>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">YouTube</a></li>
          <li><a href="#">LinkedIn</a></li>
          <li><a href="#">Skype</a></li>
        </ul>
        {/* Address */}
        <ul style={{ width:'30%'}} className={classes.feild}>
          <h5>Address</h5>
          <li >
             Environmental Protection Organization (EPO) Office, 2nd Floor Nasir Hospital, Bhakkar, Punjab Pakistan</li>
             <h5>Follow Us</h5>
             <FacebookIcon className={classes.socialIcon} fontSize='large' color="primary"/>
             <TwitterIcon className={classes.socialIcon} fontSize='large' color="#1111"/>
             <YouTubeIcon className={classes.socialIcon} fontSize='large' color="secondary"/>
        </ul>
      </div>
      <div className={classes.copyright}>
          <div className={classes.text}>Copyright &copy;2020-2021 | All rights reserved by www.epo.org.pk</div>
      </div>
    </div>
  );
};

export default Footer;
