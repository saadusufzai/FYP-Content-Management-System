import logo from '../images/logo.jpg'
import classes from './Header.module.css'
import Button from './Button/Button'

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
                    <li><a href="">Contact</a></li>
                    <Button text={'Doate'} icon={'s'} link={'/donate'}/>
                    {/* <li className={classes.btnAct}><a href="">Donate Us</a></li> */}
                </ul>
            </div>
        </div>

    )
}

export default Header