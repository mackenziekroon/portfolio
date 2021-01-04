import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <h1>My portfolio site!</h1>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/bio">Bio</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/contact">Contact Me</Link>
      </nav>
    </div>
  );
};

export default Navbar;
