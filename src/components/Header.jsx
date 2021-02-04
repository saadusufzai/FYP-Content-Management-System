import logo from '../images/logo.jpg'
import classes from './Header.module.css'
import Button from './Button/Button'
import {Link} from 'react-router-dom'
const Header = ()=> {    
    return(
        <div className={classes.header}>
            <div className="logo">
                <img className={classes.logo} src={logo} alt=""/>
            </div>
            <div className={classes.footer}>
                <ul className={classes.nav}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <Button text={'Donate'} link={'/donate'}/>
                        
                </ul>
            </div>
        </div>

    )
}

export default Header