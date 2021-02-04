import logo from '../images/logo.jpg'
import classes from './Header.module.css'

const Header = ()=> {    
    return(
        <div className={classes.header}>
            <div className="logo">
                <img className={classes.logo} src={logo} alt=""/>
            </div>
            <div className={classes.footer}>
                <ul className={classes.nav}>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Gallery</a></li>
                    <li><a href="">Contact Us</a></li>
                    <li className='act-btn'><a href="">Donate Us</a></li>
                </ul>
            </div>
        </div>

    )
}

export default Header