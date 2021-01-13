import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar-container">
        <Link to="/">
          <div className="nav-header">Home</div>
        </Link>
        <Link to="/bio">
          <div className="nav-header">Bio</div>
        </Link>
        <Link to="/projects">
          <div className="nav-header">Projects</div>
        </Link>
        <Link to="/resume">
          <div className="nav-header">Resume</div>
        </Link>
        <Link to="/contact">
          <div className="nav-header">Contact Me</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
