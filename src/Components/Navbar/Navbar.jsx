import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineMenuFold } from "react-icons/ai";
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleMenuClick = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <nav className="app-navbar">
      <div className="app-navbar-logo">
        <img src={logo} alt="app-logo" />
      </div>
      <ul className="app-navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/service">Services</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/3dmodel">3D Models</Link></li>
        <li><Link to="/pages">Pages</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="app-navbar-login">
        <a href="#login">Log In / Registration</a>
        <div />
        <a href="/">Book Demo</a>
      </div>
      <div className="app-navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={handleMenuClick} />
        {toggleMenu && (
          <div className="app-navbar-smallscreen-overlay flex-center slide-bottom">
            <AiOutlineMenuFold fontSize={27} className="overlay-close" onClick={handleMenuClick} />
            <ul className="app-navbar-smallscreen-links">
              <li><Link to="/" onClick={handleMenuClick}>Home</Link></li>
              <li><Link to="/service" onClick={handleMenuClick}>Services</Link></li>
              <li><Link to="/blog" onClick={handleMenuClick}>Blog</Link></li>
              <li><Link to="/3dmodel" onClick={handleMenuClick}>3D Models</Link></li>
              <li><Link to="/pages" onClick={handleMenuClick}>Pages</Link></li>
              <li><Link to="/contact" onClick={handleMenuClick}>Contact</Link></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
