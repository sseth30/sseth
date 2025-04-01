import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./AboutMe.scss";

export default function AboutMe() {
  return (
    <div>
      <Header />
      <div className="aboutme-main">
        <h1>About Me</h1>
        <p>
          I'm a Computer Engineering student at Georgia Tech who loves blending AI/ML with hardware. When I'm not coding or building circuits, I run a nonprofit, explore smart home projects, and look for new ways to learn and collaborate.
        </p>
      </div>
      <Footer />
    </div>
  );
}
