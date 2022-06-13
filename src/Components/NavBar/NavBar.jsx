import React from "react";
import "./NavBar.css"
import { Link } from "react-router-dom";
import logo from '../../reactdevske.svg';

const NavBar = () => {
    return (
        <div data-testid="NavBar" className="navbar">
            <Link to="/">
                <img src={logo} className="navbar-logo" alt="reactdevske logo" />
            </Link>
            <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/members">Members</Link></li>
                <li><Link to="/events">Events</Link></li>
                <li><Link to="/news">News</Link></li>
                <li><Link to="/forum">Forum</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                {/* <li><Link to="/#"><button>Join Community</button></Link></li> */}
            </ul>
            <Link to="/#"><button>Join Community</button></Link>
        </div>
    )
}

export default NavBar;