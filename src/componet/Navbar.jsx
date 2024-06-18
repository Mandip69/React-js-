import React from 'react';
import { Form, Link } from 'react-router-dom';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
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
        <li className="dropdown">
          <Link to="/company">Company</Link>
          <div className="dropdown-content">
            <Link to="#">About Us</Link>
            <Link to="#">Our Team</Link>
            <Link to="#">Careers</Link>
          </div>
        </li>
      </ul>
      <div className="navbar-icons">
        <a href="https://github.com/Mandip69/React-js-"><FontAwesomeIcon icon={faGithub} /></a>
        <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
        <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
      </div>
    </nav>
  );
};

export default Navbar;
