import React from "react";
import "./SnakeProject.scss";

export default function SnakeProject() {
  return (
    <div className="snake-project-section" id="snakeProject">
      <h1>
        <a
          href="https://youtube.com/shorts/CZEKG27_zg8?feature=share"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          MBED Snake Game
        </a>
      </h1>
      <p>
        This project uses an MBED microcontroller to implement a classic Snake game on
        an LCD display. I coded the game logic in C++, managing snake movement, collision
        detection, and scorekeeping.
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
    </div>
  );
}
