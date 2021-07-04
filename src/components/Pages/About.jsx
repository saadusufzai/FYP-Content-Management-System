import ContactForm from "../ContactForm/ContactForm";
import logo from "../../images/logo.png";
import classes from "./About.module.css";
import { Grid, Typography } from "@material-ui/core";
import Fade from 'react-reveal/Fade';


const About = () => {
  return (
    <Fade left className={classes.container}>
      {/* Heading */}
      <div className={classes.heading}>
        <Typography variant="h2" component="h2" align="center">
          Tanzeem Tahafaz-E- Maholiyat
        </Typography>
        <Typography variant="h4" align="center">
          Environmental Protection Organization
        </Typography>
      </div>
      {/* Grid Start */}
      <Grid container className={classes.contentBox}>
        <Grid spacing="1" item lg={4} className={classes.logo}>
          <img src={logo} alt="logo epo" />
        </Grid>
        <Grid spacing="1" item lg={8} className={classes.intro}>
          <Typography variant="h4">Who We Are</Typography>
          <Typography paragraph variant="caption">
            We Protect The Nature
          </Typography>
          <Typography
            p="5"
            spacing="2"
            paragraph
            margin="small"
            variant="body1"
            align="justify"
          >
            TANZEEM TAHAFAZ-E-MAHOLIAT (Environmental Protection Organization)
            EPO is a non-governmental, not-for-profit, non-sectarian and
            non-partisan dynamic and flexible organization based in district
            Bhakkar of Punjab province with a global vision and local focus- was
            set up in 1996 to increase the consciousness and knowledge about the
            environment and the major environmental problems facing the Earth
            today. EPO has been providing leadership role in the field of
            environment and resource management since its inception. EPO has
            been engaged in environmental development activities with a
            philosophy social development by self-help and community
            participation. EPO is registered under the social welfare agencies
            1961(XLVI of 1961). EPO registration date is 06th August 1996. EPO
            registration number is DDSW (SGD) 96-372. It’s a human-centered NGO.
            EPO could also be labeled as an implementing organization which
            designs and implements various developmental projects with the
            financial and technical support of international donor agencies and
            the government.
          </Typography>
        </Grid>
      </Grid>
        {/* Mission */}
        <Grid className={classes.contentBox} spacing="1" item lg={12}>
        <Typography variant="h3" align="center">
            Mission
        </Typography>
        <Typography
          className={classes.paragraph}
          variant="body1"
          component="p"
          align="center"
        >
          Work to achieve our vision through promotion of resource mobilization with close coordination of Vulnerable communities, NGO’s, INGO’s, and Government Departments. 
        </Typography>
      </Grid>

        {/* Vision */}
      <Grid className={classes.contentBox} spacing="1" item lg={12}>
        <Typography variant="h3" align="center">
          Vision
        </Typography>
        <Typography
          className={classes.paragraph}
          variant="body1"
          component="p"
          align="center"
        >
          Environmental Protection Organizaiton envisions a Sustainable clean
          and Healthy society
        </Typography>
      </Grid>
        {/* Goal */}
      <Grid className={classes.contentBox} spacing="1" item lg={12}>
        <Typography variant="h3" align="center">
          Goal
        </Typography>
        <Typography
          className={classes.paragraph}
          variant="body1"
          component="p"
          align="center"
        >To contribute in sustainable development Goals (SDG’s) through Advocacy in sectors of Health Water, Sanitation and Clean Energy & CA with coordinative and collaborative efforts for sustainability of vulnerable communities.</Typography>
      </Grid>
        {/* Values */}
      <Grid className={classes.contentBox} spacing="1" item lg={12}>
        <Typography variant="h3" align="center">
          Our Values
        </Typography>
        <ul className={classes.values}>
            <li>Protect the Nature</li>
            <li>Trees For Life</li>
            <li>Prevent The Blindness</li>
            <li>Community Empowerment</li>
            <li>Gender Justice</li>
            <li>Equity and Justice, to ensure that everyone – irrespective of sex, age, race, color, creed, class and religion</li>
            
        </ul>
      </Grid>

      <ContactForm showText={true} />
    </Fade>
  );
};

export default About;
