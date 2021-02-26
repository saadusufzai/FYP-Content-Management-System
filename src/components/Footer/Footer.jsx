import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.innerFooter}>
        <div className="contactUs">
          <div className="phone">
            <i></i> +92-333-6573418
          </div>
          <div className="phone">
            <i></i> info@epo.org.pk
          </div>
          <div className="phone">
            <i></i> www.epo.org.pk
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
