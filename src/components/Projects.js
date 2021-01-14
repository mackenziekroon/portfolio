import React from "react";
import Navbar from "./Navbar";
import match from "../match.png";

const Projects = () => {
  return (
    <div>
      <Navbar />
      <h1 className="projects-heading">Projects</h1>
      <div className="seekr-container">
        <h3 className="seekr-header">seekr</h3>
        <img className="seekr-img" alt="seekr-img" src={match} />
        <h4 className="view-demo">View demo</h4>
        <p className="seekr-description">seekr is a PWA</p>
      </div>

      <h3>Pup Quiz</h3>
      <h3>Fruitify Juicery</h3>
    </div>
  );
};

export default Projects;
