import React from "react";
import home from "../images/home.jpg";
import "./Basic.css";
const Navbar = () => {
  return (
    <div className="container_s">
      <nav>
        <img src={home} className="home" />
        <img src={home} className="contact" />
        <img src={home} className="about" />
        <img src={home} className="home" />
        <img src={home} className="contact" />
        <img src={home} className="about" />
        <img src={home} className="home" />
        <img src={home} className="contact" />
        <img src={home} className="about" />
      </nav>
    </div>
  );
};

export default Navbar;
