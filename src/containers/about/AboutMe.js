import React from "react";
import "./AboutMe.scss";

export default function AboutMe() {
  return (
    <div id="about" className="about-me-container">
      <h1 className="about-me-title">About Me</h1>
      <p className="about-me-text">
        I’m a second-year Computer Engineering major at Georgia Tech with a passion for AI/ML and hardware design.
        Ever since my first robotics course, I’ve been fascinated by how software and hardware intersect to create impactful solutions.
        Outside of school, I run a nonprofit called MOMA and enjoy working on automation projects at home.
        I'm driven by curiosity and collaboration and always eager to build something meaningful.
      </p>
    </div>
  );
}

