import { Typography } from '@material-ui/core';
import React from 'react';
import img1 from '../../images/team/1.jpg';
import img2 from '../../images/team/2.jpg';
import img3 from '.././../images/team/yasmin.jpeg';
import Button from '../Button/Button';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import classes from './Team.module.css';

const Team = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div>
      <Typography variant='h3' align='center'>
        Our Team
      </Typography>
      <div className={classes.boxes}>
        {/* team 1 */}
        <Card className={classes.box}>
          <img className={classes.img} src={img2} alt='Dr Mazhar Naqvi' />
          <Typography variant='h6' align='center'>
            Dr.Mazhar Naqvi
          </Typography>
          <Typography variant='body1' align='center'>
            CEO
          </Typography>
          <CardActions>
            <span className={classes.learnMore}> Learn More</span>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label='show more'
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>

          <Collapse in={expanded} timeout='auto' unmountOnExit>
            <CardContent>
              <Typography>
                Dr.Mazhar Abbas Naqvi is the CEO and Patron of EPO
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
        {/* team 2 */}

        <Card className={classes.box}>
          <img className={classes.img} src={img1} alt='Aslam Jaan' />
          <Typography variant='h6' align='center'>
            Aslam Jaan
          </Typography>
          <Typography variant='body1' align='center'>
            President
          </Typography>

          <CardActions disableSpacing>
            <span className={classes.learnMore}> Learn More</span>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label='show more'
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>

          <Collapse in={expanded} timeout='auto' unmountOnExit>
            <CardContent>
              <Typography>
                Aslam Iqbal Khan is the Founder & President of EPO{' '}
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
        {/* team 3 */}
        <Card className={classes.box}>
          <img className={classes.img} src={img3} alt='team member 1' />
          <Typography variant='h6' align='center'>
            Muhammad Yasmin
          </Typography>
          <Typography variant='body1' align='center'>
            S.V.P
          </Typography>
          <CardActions disableSpacing>
            <span className={classes.learnMore}> Learn More</span>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label='show more'
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>

          <Collapse in={expanded} timeout='auto' unmountOnExit>
            <CardContent>
              <Typography>
                Muhammad Yasmin is the Senior Vice President of EPO
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    </div>
  );
};

export default Team;
