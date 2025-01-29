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
                    <Link to="/register" className='nav-link'>Register</Link>
                </li>
                <li>
                    <Link to="/login" className='nav-link'>Login</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;