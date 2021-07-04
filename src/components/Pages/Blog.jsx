import Blogs from "../Blogs/Blogs";
import ContactForm from "../ContactForm/ContactForm";
import Register from "../Register/Register";
import Signin from "../Signin/Signin"
import Popup from "../Popup/Popup";

import classes from "./Blog.module.css";
import {Button2} from "../Button/Button";
import Fade from 'react-reveal/Fade';

const Blog = () => {
  return (
    <Fade left className={classes.blog}>
      <div className={classes.btn}>
        <Popup title='Register' component={<Register/>} />
      </div>
      <div>
        <Blogs />
      </div>

      <ContactForm showText={true} />
    </Fade>
  );
};

export default Blog;
