import React, { useState } from "react";
import close from "../images/general/icon-close.svg";
import logo from "../images/general/logo.svg";
import btnMenu from "../images/general/icon-hamburger.svg";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [menu, setMenu] = useState(false);

  window.onscroll = () => {
    let y = window.scrollY;
    if (y >= 125) {
      setScroll(true);
      setMenu(false);
    } else {
      setScroll(false);
    }
  };

  const handleClick = () => {
    setMenu(!menu);
    
  };

  return (
    <>
      <nav className={scroll ? "section-navbar off" : "section-navbar "} >
        <div className="logo">
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="menu-desktop">
          <a href="#">About</a>
          <a href="#">Careers</a>
          <a href="#">Events</a>
          <a href="#">Products</a>
          <a href="#">Support</a>
        </div>
        <div className={menu ? "hamburger-menu" : "hamburger-menu active"}>
          <div className="content-menu-header">
            <a href="#">
              <img src={logo} />
            </a>
            <button onClick={handleClick}>
              <img src={close} alt="close-btn" />
            </button>
          </div>
          <div className="menu-toggle ">
            <a href="#">About</a>
            <a href="#">Careers</a>
            <a href="#">Events</a>
            <a href="#">Products</a>
            <a href="#">Support</a>
          </div>
        </div>
        <div className="btn-mobile">
          <button onClick={handleClick} >
            <img src={btnMenu} alt="btn-open" />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
