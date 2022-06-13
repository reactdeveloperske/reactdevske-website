import React, { useState } from "react";
import "./NavBar.css"
import { Link } from "react-router-dom";
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../../reactdevske.svg';

const NavBar = () => {
    const [active, setActive] = useState(false);

    return (
        <div data-testid="NavBar" className="navbar">
            <Link to="/">
                <img src={logo} className="navbar-logo" alt="reactdevske logo" />
            </Link>
            <div className="navbar-responsive">
                <div className="navbar-toggle-btn" onClick={() => setActive(!active)}>
                    {active ? <FiX /> : <FiMenu />}
                </div>
                <div className={`navbar-menu ${active ? 'active' : ''}`}>
                    <ul>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/members">Members</Link></li>
                        <li><Link to="/events">Events</Link></li>
                        <li><Link to="/news">News</Link></li>
                        <li><Link to="/forum">Forum</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                    <Link to="/#"><button>Join Community</button></Link>
                </div>
            </div>
        </div>
    )
}

export default NavBar;