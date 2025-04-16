import React from "react";
import "./SnakeProject.scss";

export default function SnakeProject() {
  return (
    <section className="snake-project-section" id="projects">
      {/* Main Projects heading */}
      <h1 className="section-title">Projects</h1>

      {/* MBED Snake Game sub-heading */}
      <h2>
        <a
          href="https://youtube.com/shorts/CZEKG27_zg8?feature=share"
          target="_blank"
          rel="noopener noreferrer"
        >
          MBED Snake Game 🎮
        </a>
      </h2>

      <p>
        This project uses an <strong>MBED LPC1768 microcontroller</strong> to implement a classic
        <em> Snake</em> game on an <strong>LCD display</strong>. I coded the game logic in C++, managing
        real-time movement, collision detection, and scoring. The result is a
        lightweight yet interactive experience on embedded hardware.
      </p>

      <p>
        <strong>Highlights:</strong>
      </p>
      <ul>
        <li>
          <strong>Real-time updates</strong> on an LCD screen for smooth snake motion
        </li>
        <li>
          <strong>Button inputs</strong> for directional movement, using the on-board navigation switch
        </li>
        <li>
          <strong>Modular C++ design</strong> that cleanly separates game logic, rendering, and input
        </li>
        <li>
          <strong>Scoring &amp; Game Over</strong> states triggered by collision or hitting the boundary
        </li>
      </ul>

      <p>
        Looking ahead, I’d like to explore <strong>wireless scoreboards</strong> (e.g., logging high
        scores to a remote server), <strong>power optimization</strong> for battery-based prototypes,
        and <strong>advanced graphics</strong> with custom icons or tile-based rendering. This project
        has been a fun deep dive into bridging hardware-level programming with an
        entertaining game experience.
      </p>

      {/* Example diagrams or pinouts below */}
      <div className="snake-diagrams">
        <div className="diagram">
          <img
            src="/assets/images/lpc1768-pinout.png"
            alt="LPC1768 Pinout Diagram"
          />
          <div className="caption">
            📌 <strong>LPC1768 Pinout</strong> - GPIO and peripheral references for wiring.
          </div>
        </div>
        <div className="diagram">
          <img
            src="/assets/images/snake-circuit-layout.png"
            alt="Snake Circuit Layout"
          />
          <div className="caption">
            📷 <strong>Circuit layout</strong> connecting the LCD, navigation switch, and MBED LPC1768.
          </div>
        </div>
      </div>
    </section>
  );
}
