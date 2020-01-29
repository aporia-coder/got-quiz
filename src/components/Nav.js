import React from "react";
import Logo from "../assets/got-header.svg";

const Nav = () => {
  return (
    <>
      <nav className="nav-bar">
        <i class="fas fa-align-left icon burger"></i>
        <img src={Logo} alt="got-header" class="logo" />
        <ul class="nav-list">
          <li class="nav-links">Sign Up</li>
          <li class="nav-links">Login</li>
          <li class="nav-links">Play</li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
