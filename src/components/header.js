import React, { useState } from "react";
import "./style/header.css";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.webp";

import HeaderButton from "../components/headerButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header">
      <div className="header-banner">
        <p>As Seen On Shark Tank</p>
      </div>
      <nav className="navbar">
        <div className="navbar-brand">
          <NavLink to="/" className="nav-link">
            <img src={logo} alt="logo" className="logo" />
          </NavLink>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div className="sections">
          <a href="#" className="navbar-link">
            Home
          </a>  
          <a href="#" className="navbar-link">
            About us
          </a>
          <a href="#" className="navbar-link">
            Blog
          </a>
          <a href="#" className="navbar-link">
            Shop all
          </a>
          <a href="#" className="navbar-link">
            Ingredients
          </a>
          <a href="#" className="navbar-link">
            Concerns
          </a>
          <a href="#" className="navbar-link">
            Catorgories
          </a>
          <a href="#" className="navbar-link">
            Skin type
          </a>
          <a href="#" className="navbar-link">
            Store Locator
          </a>
          <a href="#" className="navbar-link header-button">
            <HeaderButton />
          </a>
          <a href="#" className="navbar-link">
            <i className="fas fa-search"></i>
          </a>
          <a href="#" className="navbar-link">
            <i className="fas fa-shopping-cart"></i>
          </a>
          <a href="#" className="navbar-link">
            <i class="fa fa-user" aria-hidden="true"></i>
          </a>
        </div>
      </nav>
      <div className={`navbar-sections ${isOpen ? "open" : ""}`}>
        <a to="#" className="navbar-link">
          h
        </a>
        <a to="#" className="navbar-link">
          About us
        </a>
        <a to="#" className="navbar-link">
          Blog
        </a>
        <a to="#" className="navbar-link">
          Shop all
        </a>
        <a to="#" className="navbar-link">
          Ingredients
        </a>
        <a to="#" className="navbar-link">
          Concerns
        </a>
        <a to="#" className="navbar-link">
          categories
        </a>
        <a to="#" className="navbar-link">
          Skin type
        </a>
        <a to="#" className="navbar-link">
          Store Locator
        </a>
      </div>
    </div>
  );
};

export default Navbar;