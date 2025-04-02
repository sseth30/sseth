import React from "react";
import "./AboutMe.scss";
import myPic from "../../assets/images/satchit.jpg";
import { Link } from "react-router-dom";

export default function AboutMe() {
  return (
    <div className="about-me-container">
      <div className="about-me-content">
        <Link to="/" className="about-me-back">← Back to Home</Link>
        <img
          src={myPic}
          alt="Satchit Seth"
          className="about-me-image"
          onClick={() =>
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
          }
        />
        <h1 className="about-me-title">About Me</h1>

        <p className="about-me-text">
          Hi, I'm <span className="highlight-name">Satchit</span> — a second-year{" "}
          <span className="highlight">Computer Engineering</span> major at{" "}
          <span className="highlight-school">Georgia Tech</span> with a passion for{" "}
          <span className="highlight">AI/ML</span>, low-level systems, and hardware design. 
          I run a nonprofit and love building meaningful side projects.
        </p>

        <p className="about-me-text">
          I’ve always been curious about how computers tick — how they process, learn, and adapt. 
          That led me to explore both <span className="highlight">software engineering</span> and{" "}
          <span className="highlight">hardware systems</span>, eventually working on research projects involving{" "}
          <span className="highlight">AI, robotics, and embedded systems</span>.
        </p>

        <p className="about-me-text">
          I started college at the <span className="highlight-school">University of Georgia</span> in{" "}
          <span className="highlight">Mechanical Engineering</span>. But by Dec 2024, my curiosity led me to switch majors 
          to <span className="highlight">Computer Systems Engineering</span> and transfer to GT — a bold move 
          that shaped how I think as both a coder <em>and</em> circuit designer.
        </p>

        <p className="about-me-text">
          I’m the founder of <span className="highlight-org">Meals for One, Meals for All</span>, a nonprofit addressing{" "}
          <span className="highlight">food insecurity</span> through grassroots innovation. I love collaborating — 
          whether it's building smart tech or driving impact.
        </p>

        <p className="about-me-text fun-facts">
          <em>Bonus facts?</em> 🎾 I play tennis/pickleball, 🐾 hike with my dog, and 🧠 speedsolve Rubik’s cubes.
        </p>
      </div>
    </div>
  );
}
