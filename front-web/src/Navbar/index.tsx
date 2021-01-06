import {ReactComponent as Logo } from './Logo.svg';
import './style.css';

const Navbar = () => {
    return (
        <nav className="main-navbar">
           <Logo />
           <a href="home" className="logo-text">DS Deliver</a>
        </nav>
    )
}

export default Navbar;