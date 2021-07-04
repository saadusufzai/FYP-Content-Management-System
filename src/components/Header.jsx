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
          
                <ul style={{transform:`${burger?"translateX(-50px)":"" }`}} className={classes.nav}>
               
                <i onClick={()=>setBurger(!burger)} style={{left:'11em',top:'.5em'}} className="fa fa-times" aria-hidden="true"></i>
                    <li  onClick={()=>setBurger(!burger)}><Link to="/">Home</Link></li>
                    <li  onClick={()=>setBurger(!burger)}><Link to="/about">About</Link></li>
                    <li onClick={()=>setBurger(!burger)}><Link to="/gallery">Gallery</Link></li>
                    <li onClick={()=>setBurger(!burger)}><Link to="/blog">Blog</Link></li>
                    <li onClick={()=>setBurger(!burger)}><Link to="/contact">Contact</Link></li>

                    <Button  text={'Donate'} setBurger={setBurger}  link={'/donate'}/>
                    
                        
                </ul>
            </div>
        </div>

    )
}

export default Header