import React from "react";
import "./AboutMe.scss";
import myPic from "../../assets/images/satchit.jpg"; // <-- add your actual image path

export default function AboutMe() {
  return (
    <div className="about-me-container">
      <div className="about-me-content">
        <img src={myPic} alt="Satchit Seth" className="about-me-image" />
        <h1>About Me</h1>
        <p>
          Hi, I'm Satchit! I'm a second-year Computer Engineering major at Georgia Tech
          with a passion for AI/ML and hardware design. When I'm not building things,
          I run a nonprofit and love working on home automation projects.
        </p>
      </div>
    </div>
  );
}
