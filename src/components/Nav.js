import React from "react";
import Logo from "../assets/got-header.svg";

const Nav = () => {
  return (
    <>
      <nav className="nav-bar">
        <i className="fas fa-align-left icon burger"></i>
        <img src={Logo} alt="got-header" className="logo" />
        <ul className="nav-list">
          <li className="nav-links">Sign Up</li>
          <li className="nav-links">Login</li>
          <li className="nav-links">Play</li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
