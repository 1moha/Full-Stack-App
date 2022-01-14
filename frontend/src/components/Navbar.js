import './Navbar.css';
import {Link} from 'react-router-dom';

const Navbar = ({click}) => {
    return(
        <div className="back">
            <nav className="navbar">
                {/* logo */}
                <div className="navbar__logo">
                    <h2>Risari</h2>
                </div>

                {/* links */}
                <ul className="navbar__links">
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <div className="cartlink" onClick={click}>
                            <i className="fas fa-shopping-cart"></i>
                            <span>
                                Cart 
                                <span className="cartlogo__badge">0</span>
                            </span>
                        </div>
                    </li>
                </ul>

            </nav>
        </div>
    )
}

export default Navbar