import React,{ useState} from "react";

import Switch from '@material-ui/core/Switch'
import { Tooltip } from "@material-ui/core";

import logo from '../images/logo.png'
import classes from './Header.module.css'
import Button from './Button/Button'
import {Link} from 'react-router-dom'

const Header = ({darkMode, setDarkMode})=> {    
    let [burger,setBurger] = useState(false)

    return(
        <div className={classes.header}>
            <i onClick={()=>setBurger(!burger)} class="fa fa-bars fa-2x" aria-hidden="true"></i>
            <div className={classes.logo}>
                <img className={classes.logo} src={logo} alt="logo-epo"/>
            </div>
            <div>
          
                <ul style={{transform:`${burger?"translateX(-50px)":"" }`}} className={classes.nav}>
               
                <i onClick={()=>setBurger(!burger)} style={{left:'11em',top:'.5em'}} className="fa fa-times" aria-hidden="true"></i>
                    <li  onClick={()=>setBurger(false)}><Link to="/">Home</Link></li>
                    <li  onClick={()=>setBurger(false)}><Link to="/about">About</Link></li>
                    <li onClick={()=>setBurger(false)}><Link to="/gallery">Gallery</Link></li>
                    <li onClick={()=>setBurger(false)}><Link to="/blog">Blog</Link></li>
                    <li onClick={()=>setBurger(false)}><Link to="/contact">Contact</Link></li>

                    <Button  text={'Donate'} setBurger={setBurger}  link={'/donate'}/>
                    
                        
                </ul>
            </div>
            {/* <Tooltip title='Toggle Dark/Light Theme'>  
          <Switch
        checked={darkMode}
        onChange={()=>setDarkMode(!darkMode)}
        
      /></Tooltip> */}
        </div>

    )
}

export default Header