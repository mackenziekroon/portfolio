import React from "react";
import homeImg from "../homeImg.png";
import HomeNavbar from "./HomeNavbar";

const Home = () => {
  return (
    <div className="home-container">
      <img className="home-img" alt="" src={homeImg} />
      <HomeNavbar />
    </div>
  );
};

export default Home;
