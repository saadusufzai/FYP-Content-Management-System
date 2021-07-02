import React,{ useState} from "react";

import logo from '../images/logo.jpg'
import classes from './Header.module.css'
import Button from './Button/Button'
import {Link} from 'react-router-dom'
const Header = ()=> {    
    let [burger,setBurger] = useState(false)

    return(
        <div className={classes.header}>
            <i onClick={()=>setBurger(!burger)} class="fa fa-bars fa-2x" aria-hidden="true"></i>
            <div className={classes.logo}>
                <img className={classes.logo} src={logo} alt="logo-epo"/>
            </div>
            <div>
          
                <ul style={{transform:`${burger?"translateX(-50px)":"translateX(-280px)" }`}} className={classes.nav}>
               
                <i onClick={()=>setBurger(!burger)} style={{left:'11em',top:'.5em'}} className="fa fa-times" aria-hidden="true"></i>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/contact">Contact</Link></li>

                    <Button text={'Donate'} link={'/donate'}/>
                    
                        
                </ul>
            </div>
        </div>

    )
}

export default Header