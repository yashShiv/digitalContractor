import React from 'react';
import {NavLink} from 'react-router-dom';
import './style.css';

const Footer = () => {

  return (
    <div className="footer">
      <div className="footer__section">
        <NavLink className="no_style_link" to="/about" >
          <span className="footer__item">Read about us</span>
        </NavLink>
        <NavLink className="no_style_link" to="/contact">
          <span className="footer__item">Contact us</span>
        </NavLink>
        <NavLink className="no_style_link" to="/services">
          <span className="footer__item">Our Services</span>
        </NavLink>
      </div>
      <p className="website">digitalcontrator.com</p>
      <p className="copyright">&#169; 2020-21.</p>
    </div>
  )

}

export default Footer;
