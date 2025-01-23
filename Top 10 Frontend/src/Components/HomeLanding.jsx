import { Link } from 'react-router-dom';
import logo from '../Styles/logo/Top-10-logo.png';

export default function HomeLanding(){

    return(
            <div className="home-container">
                <img className='top-10-logo' src={logo} ></img>
                {/* <h1 classname="home-heading">The Top 10 Game</h1> */}
                <div className="random-list">
                    <Link to='/Players' className="home-link"><h2>Random List</h2></Link>
                </div>
                <div className="categories">
                   <Link to='/category' className="home-link"> <h2>Categories</h2></Link>
                </div>
                <div className="how-to-play">
                    <Link className="home-link"><h2>How To Play</h2></Link>
                </div>
            </div>
    )
}