import { Link } from 'react-router-dom';
import logo from '../Styles/logo/Top-10-logo.png';

// HOME PAGE COMPONENT
export default function HomeLanding(){

    return(
            <div className="home-container">
                <img className='top-10-logo' alt="top 10 game logo" src={logo} ></img>
                <div className="random-list">
                    <Link to='/players' className="home-link"><h2>Random List</h2></Link>
                </div>
                <div className="categories">
                   <Link to='/category' className="home-link"> <h2>Categories</h2></Link>
                </div>
                <div className="how-to-play">
                    <Link to='/how-to-play' className="home-link"><h2>How To Play</h2></Link>
                </div>
            </div>
    )
}