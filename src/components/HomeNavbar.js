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
          <div className="home-nav-header">About me</div>
        </Link>
        <Link to="/projects">
          <div className="home-nav-header">Projects</div>
        </Link>
        {/* <Link to="/resume">
          <div className="home-nav-header">Resume</div>
        </Link> */}
        <Link to="/contact">
          <div className="home-nav-header">Contact Me</div>
        </Link>
      </div>
    </div>
  );
};

export default HomeNavbar;
