import { Typography } from "@material-ui/core";
import React from "react";
import img1 from "../../images/team/1.jpg";
import img2 from "../../images/team/2.jpg";
import img3 from "../../images/team/3.jpg";
import Button from "../Button/Button";

import classes from './Team.module.css'


const Team = () => {
  return (
    <div>
      <Typography variant="h3" align="center">
        Our Team
      </Typography>
      <div className={classes.boxes}>
          {/* team 1 */}
        <div className={classes.box}>
          <img className={classes.img} src={img1} alt="Aslam Jaan" />
          <Typography variant="h6" align="center">Aslam Jaan</Typography>
          <Typography variant="body1" align="center">President</Typography>
          <div className={classes.learnMore}> Learn More</div>
        </div>
          {/* team 2 */}
        <div className={classes.box}>
          <img className={classes.img} src={img2} alt="Dr Mazhar Naqvi" />
          <Typography variant="h6" align="center">Dr.Mazhar Naqvi</Typography>
          <Typography variant="body1" align="center">CEO</Typography>
          <div className={classes.learnMore}> Learn More</div>
        </div>
          {/* team 3 */}
        <div className={classes.box}>
          <img className={classes.img} src={img3} alt="team member 1" />
          <Typography variant="h6" align="center">M.Saad Aslam</Typography>
          <Typography variant="body1" align="center">S.V.P</Typography>
          <div className={classes.learnMore}> Learn More</div>
        </div>
      </div>
    </div>
  );
};

export default Team;
