import React from "react";
import Navbar from "./Navbar";
import resume from "../resume.png";

const Resume = () => {
  return (
    <div>
      <Navbar />
      <div className="resume-container">
        <img className="resume-img" alt="" src={resume} />
      </div>
    </div>
  );
};

export default Resume;
