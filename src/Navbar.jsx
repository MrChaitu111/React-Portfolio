import React from "react";
import "./App.css";



const Navbar = () => {
  return (
    <>
      <div className="container nav_bar" data-aos="zoom-up"
      data-aos-duration="2000">
        <div className="left nav_items">Portfolio</div>
        <div className="right mr-10">
          <a href="#home" className="nav_items">Home</a>
          <a href="#about" className="nav_items">About</a>
          <a href="#contact" className="nav_items">Contact</a>
          <a href="#skills" className="nav_items">Skills</a>
          <a href="#projects" className="nav_items">Projects</a>
          <a href="#experience" className="nav_items">Experience</a>

        </div>
      </div>
    </>
  );
};

export default Navbar;
