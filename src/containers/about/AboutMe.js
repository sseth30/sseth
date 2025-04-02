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
      I run a nonprofit and love working on various software projects.
      </p>
      <p>
        I've always been fascinated with how computers work under the hood—what makes them tick, how they process information, and how they can be pushed to learn and adapt. That curiosity led me to explore both software engineering and hardware design, and eventually into the world of research, where I've worked on projects involving AI, robotics, deep learning and embedded systems.
      </p>
        <p>
            I originally started my academic journey at the University of Georgia, where I first majored in Mechanical Engineering. Over time, my growing interest in machine learning, low-level systems, and applied innovation motivated me to change my major to Computer Systems Engineering in Dec 2024, just before the second semester began. I had always wanted to become an engineer, so transferring to Georgia Tech was an absolute no-brainer. I successfully transferred to GT where I am currently pursuing my Bachelors Degree in Computer Engineering. My academic journey has been nothing less than an exciting transition that’s broadened my perspective and challenged me to think both like a coder and a circuit designer.
        </p>
        <p>
          Outside of academics, I’m the founder of <strong>Meals for One, Meals for All</strong>, a nonprofit aimed at fighting food insecurity through community-driven solutions. I’m always looking for meaningful collaboration opportunities—whether it's building helpful tech or making a social impact. My hobbies include playing tennis/pickleball, hiking with my pet dog, and speedsolving/blindsolving the Rubik's Cube.
        </p>

      </div>
    </div>
  );
}
