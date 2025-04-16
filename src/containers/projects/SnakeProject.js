import React from "react";
import "./SnakeProject.scss";
import pinoutImg from "../../assets/images/lpc1768-pinout.png";
import circuitImg from "../../assets/images/snake-circuit-layout.png";

export default function SnakeProject() {
  return (
    <div className="snake-project-section" id="snakeProject">
      <h1>
        <a
          href="https://youtube.com/shorts/CZEKG27_zg8?feature=share"
          target="_blank"
          rel="noopener noreferrer"
        >
          MBED Snake Game 🎮
        </a>
      </h1>

      <p>
        This project uses an MBED microcontroller to implement a classic Snake game on an LCD display. I coded the game logic in C++, managing snake movement, collision detection, and scorekeeping.
      </p>

      <p><strong>Highlights:</strong></p>
      <ul>
        <li>Real-time updates on an LCD screen</li>
        <li>Button inputs for snake movement</li>
        <li>Modular code structure in C++</li>
        <li>Scoring and game over conditions</li>
      </ul>

      <p>
        Future expansions include power management, wireless scoreboard tracking, and more advanced graphics.
      </p>

   <div className="snake-diagrams">
  <div className="diagram">
    <img src={pinoutImg} alt="LPC1768 Pinout Diagram" />
    <div className="caption">📌 LPC1768 Pinout - GPIO and peripheral references for wiring.</div>
  </div>
  <div className="diagram">
    <img src={circuitImg} alt="Snake Circuit Layout" />
    <div className="caption">📷 Circuit layout connecting the LCD, navigation switch, and MBED LPC1768.</div>
  </div>
</div>

    </div>
  );
}
