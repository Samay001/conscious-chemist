import React from "react";
import "./style/footer.css";
import whitelogo from "../assets/images/white-logo.webp";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container">
      <div className="footer">
        <div className="footer-section">
          <div className="footer-brand">
            <NavLink to="/" className="nav-link">
              <img src={whitelogo} alt="logo" className="logo" />
            </NavLink>
          </div>
          <p>
          We are a performance driven skincare brand. Our Products are driven by the latest in skincare technology, each product is built with safe actives at optimal percentages for superior efficacy.
          </p>
        </div>
        <div className="footer-section">
          <h3>Product</h3>
          <ul>
            <li>Features</li>
            <li>Integrations</li>
            <li>FAQ</li>
            <li>API</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Support</h3>
          <ul>
            <li>Help</li>
            <li>Community</li>
            <li>Contact</li>
            <li>Privacy</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Legal</h3>
          <ul>
            <li>Terms</li>
            <li>Privacy</li>
          </ul>
        </div>
      </div>
      <div className="copyright-container address">
        <p>
          Made In India
        </p>
        <p>Marketed By: Era Botanics Pvt Ltd </p>
        <p> Conscious Chemist, A-203 NPSC CGHS LTD plot Dwarka, No.5 Sec-2, Delhi, </p>
        <p>New Delhi - 110075</p>
      </div>
      <div className="copyright-container">
          <p className="copy-right">&copy; 2024 CONSCIOUS CHEMIST</p>
      </div>
    </div>
  );
};

export default Footer;
