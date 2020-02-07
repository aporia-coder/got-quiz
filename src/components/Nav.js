import React from "react";
import Logo from "../assets/got-header.svg";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header>
      <nav className="nav-bar">
        <i className="fas fa-align-left icon burger"></i>
        <img src={Logo} alt="got-header" className="logo" />
        <ul className="nav-list">
          <Link to="/" className="nav-links">
            Home
          </Link>
          <Link className="nav-links">Sign Up</Link>
          <Link to="/login" className="nav-links">
            Login
          </Link>
          <Link to="/game" className="nav-links">
            Play
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
