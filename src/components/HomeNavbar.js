import React from "react";
import { Link } from "react-router-dom";

const HomeNavbar = () => {
  return (
    <div>
      <div className="home-navbar-container">
        {/* <Link to="/">
          <div className="nav-header">Home</div>
        </Link> */}
        <Link to="/bio">
          <div className="bio-nav-header">Bio</div>
        </Link>
        <Link to="/projects">
          <div className="project-nav-header">Projects</div>
        </Link>
        <Link to="/resume">
          <div className="resume-nav-header">Resume</div>
        </Link>
        <Link to="/contact">
          <div className="contact-nav-header">Contact Me</div>
        </Link>
      </div>
    </div>
  );
};

export default HomeNavbar;
