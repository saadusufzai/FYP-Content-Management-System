
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Cards from './Cards'
import { Typography } from "@material-ui/core";

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
    marginTop: theme.spacing(2),
  },
}));

const Blogs = () => {
  const classes = useStyles();
  return (
    <div className={classes.blogs}>
      <Typography variant="h3" align="center" gutterBottom >BLOGS</Typography>
      
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4} > <Cards/></Grid>
          <Grid item xs={12} sm={6} md={4} > <Cards/></Grid>
          <Grid item xs={12} sm={6} md={4} > <Cards/></Grid>
          <Grid item xs={12} sm={6} md={4} > <Cards/></Grid>
          <Grid item xs={12} sm={6} md={4} > <Cards/></Grid>
          <Grid item xs={12} sm={6} md={4} > <Cards/></Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Blogs;
