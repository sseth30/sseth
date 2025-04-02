import React from "react";
import { HashLink } from "react-router-hash-link";
import "./AboutMe.scss";
import myPic from "../../assets/images/satchit.jpg";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade"; // ✅ import fade animation

export default function AboutMe() {
  return (
    <Fade bottom duration={800} distance="30px">
      <div className="about-me-container">
        <div className="about-me-content">
          {/* Centered Image */}
          <div className="about-me-image-wrapper">
            <HashLink to="/#contact" smooth>
              <img
                src={myPic}
                alt="Satchit Seth"
                className="about-me-image"
                title="📬 Click to contact me"
              />
            </HashLink>
          </div>

          <h1 className="about-me-title">About Me</h1>

          <p className="about-me-text">
            Hi, I'm <span className="highlight-name">Satchit</span> — a second-year{" "}
            <span className="highlight">Computer Engineering</span> major at{" "}
            <span className="highlight-school">Georgia Tech</span> with a passion for{" "}
            <span className="highlight">AI/ML</span>, low-level systems, and hardware design.
            I run a nonprofit and love building meaningful side projects.
          </p>

          <p className="about-me-text">
            I’ve always been curious about what makes computers tick — how they process, learn, and adapt. 
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

          <p className="about-me-text">
            Looking ahead, my long-term goal is to become a technical product leader at the intersection of <span className="highlight">embedded systems</span> and <span className="highlight">AI/ML</span> — driving innovation in industries like robotics, healthcare, or sustainable infrastructure. Guided by the <span className="highlight-school">ECE Roadmap</span>, I'm actively building a strong foundation in low-level computing, digital design, and machine learning while gaining hands-on experience through research, side projects, and internships. My plan is to keep learning by doing — taking challenging courses, contributing to real-world solutions, and eventually leading the development of intelligent, human-centered technologies.
         </p>


          <p className="about-me-text fun-facts">
            <em>Bonus facts?</em> 🎾 I play tennis and pickleball, 🐾 hike with my dog, and 🧠 speedsolve Rubik’s cubes.
          </p>

          {/* Back to Home at Bottom */}
          <div className="about-me-bottom-link">
            <Link to="/">← Back to Home</Link>
          </div>
        </div>
      </div>
    </Fade>
  );
}
