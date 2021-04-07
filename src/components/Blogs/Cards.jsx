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
import ReactMarkdown from 'react-markdown'
const useStyles = makeStyles({
  root: {
    padding:0
  },
 
});

export default function Cards({title,description,thumbnails}) {
  const classes = useStyles();
  const url = "https://epo-api.herokuapp.com"
  return (
    <Card style={{height:'100%'}} className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="environment-blog"
          height="200"
          image={`${url}`+thumbnails}
          title="Environment Blog"
        />
        <CardContent style={{padding:'0',textJustify:'inter-word'}}>
          <Typography gutterBottom variant="h6" component="h5">
            <ReactMarkdown source={title} />
            
          </Typography>
          <Typography variant="body2" style={{textJustify:'inter-word'}} color="textSecondary" component="p">
          <ReactMarkdown style={{textJustify:'inter-word'}} source={description} />
           
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