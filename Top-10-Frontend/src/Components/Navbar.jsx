import { Link } from 'react-router-dom';
import logo from '../Styles/logo/Top-10-logo.png';


function Navbar(){
    return (
        <nav className="nav">
            <Link to="/" className="nav-logo">
                <img className='nav-logo' alt="top 10 game logo" src={logo}></img>
            </Link>
            <ul>
                <li>
                    <Link to="/contact-us" className='nav-link'>Contact Us</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;