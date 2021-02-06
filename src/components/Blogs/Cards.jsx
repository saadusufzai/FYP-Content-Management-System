import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import img from '../../images/carousel/img1.jpg';
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
 
});

export default function Cards() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="environment-blog"
          height="200"
          image={img}
          title="Environment Blog"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h5">
            Environment Blog
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           This is a blog about the environment. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates exercitationem porro possim
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}