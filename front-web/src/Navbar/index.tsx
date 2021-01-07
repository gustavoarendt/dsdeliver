import { Link } from 'react-router-dom';
import {ReactComponent as Logo } from './Logo.svg';
import './styles.css';

const Navbar = () => {
    return (
        <nav className="main-navbar">
           <Logo />
           <Link to="/" className="logo-text">DS Deliver</Link>
        </nav>
    )
}

export default Navbar;