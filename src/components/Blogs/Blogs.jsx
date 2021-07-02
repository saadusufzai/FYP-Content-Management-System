import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Cards from "./Cards";
import { Typography } from "@material-ui/core";
import axios from "axios";
import styles from './Blogs.module.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "90%",
    margin: "0 auto",
  },
  card: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  blogs: {
    marginTop: theme.spacing(2),
  },
  loader:{ 
    color:'red',
    fontSize:'25'
  }
}));

  const url = "https://epo-api.herokuapp.com"

const Blogs = () => {
  
  const [data, setData] = React.useState();     
  React.useEffect(() => {
    axios
      .get(`${url}/blogs`)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // const title = data.map((blog)=>blog.Title)

  function createMarkup() {
    return {__html: 'First &middot; Second'};
  }
  

  const classes = useStyles();

 

  return (
    <div className={classes.blogs}>
      <Typography variant="h3" align="center" gutterBottom>
        BLOGS
      </Typography>

      <div className={classes.root}>
        <Grid container spacing={3}>
           {data? data.map((blog, i)=>
          <Grid  item xs={12} sm={6} md={4}>
            {" "}
              <Cards dangerouslySetInnerHTML={createMarkup()} index={i} title={blog.Title} description={blog.Intro}  />
          </Grid>
           ):<div className={styles.loader} >Loading Blogs...</div>} 
        </Grid>
      </div>
    </div>
  );
};

export default Blogs;
