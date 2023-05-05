import React from "react";
import logo from "../images/general/logo.svg";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoPinterest,
  IoLogoTwitter,
} from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="section-footer">
      <div className="footer-left">
        <div className="logo">
          <a href="#">
            <img src={logo} alt="logo-footer" />
          </a>
        </div>
        <div className="menu-footer">
          <a href="#">About</a>
          <a href="#">Careers</a>
          <a href="#">Events</a>
          <a href="#"> Products</a>
          <a href="#">Support</a>
        </div>
      </div>

      <div className="footer-right">
        <div className="social-networks">
          <a href="#">
            <IoLogoFacebook />
          </a>
          <a href="#">
            <IoLogoTwitter />
          </a>
          <a href="#">
            <IoLogoPinterest />
          </a>
          <a href="#">
            <IoLogoInstagram />
          </a>
        </div>
        <div className="footer-footer">
          <h4>© 2021 Loopstudios. All rights reserved.</h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
