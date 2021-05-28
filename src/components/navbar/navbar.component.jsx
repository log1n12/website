import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.style.scss';

const NavBar = ({ }) => (
    <div className="navbar">
        <Link className="logo-container">
        </Link>
        <div className="options">
            <Link className="option" to="/">Home</Link>
            <Link className="option" to="/about">About</Link>
            <Link className="option" to="/services">Services</Link>
            <Link className="option" to="/contactus">Contact Us</Link>
            <Link className="option" to="/sign">Sign In</Link>
        </div>
    </div>
)

export default NavBar;