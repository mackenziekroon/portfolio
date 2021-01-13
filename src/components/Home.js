import React from "react";
import homeImg from "../homeImg.png";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="home-container">
      <img className="home-img" alt="" src={homeImg} />
      <Navbar />
    </div>
  );
};

export default Home;
