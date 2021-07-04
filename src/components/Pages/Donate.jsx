import { Typography } from "@material-ui/core";
import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import styles from "./Donate.module.css";
import Grid from "@material-ui/core/Grid";

import Product from "../Product/Product";
import Fade from 'react-reveal/Fade';

const Donate = () => {
  const data = [1];
  return (
    <Fade left>
      <div className={styles.upper}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={8} className={styles.left}>
            <Typography variant="h2">Plant a Billion Trees</Typography>
            <Typography variant="body1">
              Together we can plant roots for tomorrow and donate today. Your
              donation can turn the tide of deforestation and help us protect
              and expand forests around the globe before they shrink even
              further. You’ll do more than put a seed in the ground—you’ll make
              sure these habitats can survive for future generations.
            </Typography>
          </Grid>
          <Grid xs={12} sm={6} md={4} className={styles.right}>
            <Product />
          </Grid>
        </Grid>
      </div>

     <Fade top> <ContactForm showText={true} /></Fade>
    </Fade>
  );
};

export default Donate;
