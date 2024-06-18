import React from 'react';
import { Form, Link } from 'react-router-dom';
import './navbar.css';

import logo from '../assets/react.svg'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="logo" />
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Service</Link></li>
        <li><Link to="/contact">Contact us</Link></li>
        
      </ul>
      
    </nav>
  );
};

export default Navbar;
