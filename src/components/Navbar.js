import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar-container">
        <Link to="/">
          <div className="home">Home</div>
        </Link>
        <Link to="/bio">
          <div className="bio">Bio</div>
        </Link>
        <Link to="/projects">
          <div className="projects">Projects</div>
        </Link>
        <Link to="/resume">
          <div className="resume">Resume</div>
        </Link>
        <Link to="/contact">
          <div className="contact">Contact Me</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
