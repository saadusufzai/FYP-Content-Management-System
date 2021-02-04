
import classes from './Button.module.css'

import React from "react";
import classes from './Button.module.css'

import {useNavigate} from 'react-router-dom'

const Button = ({ icon, text, link }) => {
  const navigate = useNavigate()
  const handelClick = ()=>{
    navigate(`/${link}`)
} 
  return (
    <div onClick={handelClick} className={classes.icon1}>
      <div className={classes.icon}>
        <i className={`fa ${icon}`} aria-hidden="true"></i>
        {text}
      </div>
    </div>
  );
};

export default Button
