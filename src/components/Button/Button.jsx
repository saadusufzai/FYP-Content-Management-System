
import classes from './Button.module.css'

import {useNavigate} from 'react-router-dom'

const Button = ({ text, link, setBurger }) => {
  const navigate = useNavigate()
  const handelClick = ()=>{
    setBurger(false)
    navigate(`${link}`)
} 
  return (
    <div onClick={handelClick} className={classes.btnAct}>
      <div className={classes.icon}>
           {text}
      </div>
    </div>
  );
};

export const Button2 = ({ text, link }) => {
  const navigate = useNavigate()
  const handelClick = ()=>{
    navigate(`/${link}`)
} 
  return (
    <div onClick={handelClick} className={classes.btn2}>
      <div className={classes.icon}>
        
        {text}
      </div>
    </div>
  );
};

export default Button
