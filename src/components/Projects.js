import React from "react";
import match from "../match.png";

const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      <div className="seekr-container">
        <h3>seekr</h3>
        <img className="seekr-img" alt="seekr-img" src={match} />
      </div>

      <h3>Pup Quiz</h3>
      <h3>Fruitify Juicery</h3>
    </div>
  );
};

export default Projects;
