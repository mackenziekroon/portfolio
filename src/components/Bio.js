import React from "react";
import bodhi from "../bodhi.jpeg";

const Bio = () => {
  return (
    <div>
      <h1>About me...</h1>
      <h5>
        I am a recent graduate from the Grace Hopper program at Fullstack
        Academy looking for a full-time position as a Software Engineer
      </h5>
      <h5>
        I previously worked in the fashion industry as an Operations Coordinator
      </h5>
      <h5>I also spent time working with Menswear Dog on photoshoots</h5>
      <img className="bodhi" alt="" src={bodhi}></img>
    </div>
  );
};

export default Bio;
