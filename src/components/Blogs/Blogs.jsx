import styles from "./Blogs.module.css";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Cards from './Cards'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '90%',
    margin: '0 auto',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  blogs: {
    
  },
}));

const Blogs = () => {
  const classes = useStyles();
  return (
    <div className={classes.blogs}>
      <h1 style={{textAlign: 'center',marginTop:'.5em'}} >BLOGS</h1>
      
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4} > <Cards/></Grid>
          <Grid item xs={12} sm={4} > <Cards/></Grid>
          <Grid item xs={12} sm={4} > <Cards/></Grid>
          <Grid item xs={12} sm={4} > <Cards/></Grid>
          <Grid item xs={12} sm={4} > <Cards/></Grid>
          <Grid item xs={12} sm={4} > <Cards/></Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Blogs;
