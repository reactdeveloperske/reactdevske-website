import React from "react";
import "./NavBar.css"
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div data-testid="NavBar" className="navbar">
            <ul>
                <li><Link to="/about">about</Link></li>
                <li><Link to="/members">members</Link></li>
                <li><Link to="/events">events</Link></li>
                <li><Link to="/contact">contact</Link></li>   
            </ul>
        </div>
    )
}

export default NavBar;