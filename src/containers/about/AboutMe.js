import React from "react";
import "./AboutMe.scss";
import myPic from "../../assets/images/satchit.jpg";

export default function AboutMe() {
  return (
    <div className="about-me-container">
      <div className="about-me-content">
        <img src={myPic} alt="Satchit Seth" className="about-me-image" />
        <h1>About Me</h1>

        <p>
          Hi, I'm <span className="highlight">Satchit</span> — a <span className="keyword">second-year Computer Engineering major</span> at <strong>Georgia Tech</strong> with a passion for{" "}
          <span className="keyword">AI/ML</span>, low-level systems, and <span className="keyword">hardware design</span>. When I’m not building things, I run a nonprofit and tinker on side projects that bring real value to people.
        </p>

        <p className="breakline">
          I’ve always been curious about what makes computers tick — how they process, learn, and adapt. That led me to explore both <strong>software engineering</strong> and <strong>hardware systems</strong>, eventually branching into exciting research projects involving{" "}
          <span className="keyword">AI</span>, <span className="keyword">robotics</span>, and <span className="keyword">embedded systems</span>.
        </p>

        <p className="breakline">
          I began my academic journey at the <strong>University of Georgia</strong> as a Mechanical Engineering major. But in Dec 2024, I shifted to Computer Systems Engineering and later transferred to <strong>Georgia Tech</strong> — a bold, exciting move that’s shaped my ability to think both like a coder <em>and</em> a circuit designer.
        </p>

        <p className="breakline">
          Outside of class, I founded <strong className="highlight">Meals for One, Meals for All</strong>, a nonprofit focused on fighting food insecurity through grassroots innovation. I'm always open to collaboration — whether it's building purposeful tech or driving positive change in the community.
        </p>

        <p className="breakline">
          <em>Bonus facts?</em> I play tennis and pickleball 🏓, hike with my dog 🐾, and speedsolve/blindsolve Rubik’s Cubes in my spare time. 
        </p>
      </div>
    </div>
  );
}
