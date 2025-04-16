import React from "react";
import "./SnakeProject.scss";

// If your images are in src/assets/images:
import pinoutImg from "../../assets/images/lpc1768-pinout.png";
import circuitImg from "../../assets/images/snake-circuit-layout.png";

export default function SnakeProject() {
  return (
    <section className="snake-project-section" id="projects">
      {/* Main Projects heading, centered via CSS */}
      <h1 className="section-title">Projects</h1>

      {/* MBED Snake Game sub-heading */}
      <h2 className="snake-game-title">
        <a
          href="https://youtube.com/shorts/CZEKG27_zg8?feature=share"
          target="_blank"
          rel="noopener noreferrer"
        >
          MBED Snake Game 🎮
        </a>
      </h2>

      <p>
        This project uses an <strong>MBED LPC1768 microcontroller</strong> to implement
        a classic <em>Snake</em> game on an <strong>LCD display</strong>. I coded the game
        logic in C++, managing real-time movement, collision detection, and scoring.
        The result is a lightweight yet interactive experience on embedded hardware.
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

          {/*  ──────────────────────────────────────────  */}
{/*  Discovery‑style narrative                                                     */}
{/*  ──────────────────────────────────────────  */}
<section className="discovery-wrap">

  {/* 1. Starting idea / pitch */}
  <h3>Discovery Project&nbsp;Idea 🚀</h3>
  <p>
    The original pitch was to rebuild the nostalgic <em>Snake</em> arcade
    game entirely on an <strong>MBED LPC1768</strong>, proving that modern
    embedded boards could deliver smooth animation and responsive controls
    without a dedicated GPU.
  </p>

  {/* 2. Progress over the semester */}
  <h3>Project Progress 📈</h3>
  <p>
    • Week&nbsp;3&nbsp;&ndash;&nbsp;basic LCD driver and frame buffer <br/>
    • Week&nbsp;6&nbsp;&ndash;&nbsp;navigation‑switch input debounce <br/>
    • Week&nbsp;9&nbsp;&ndash;&nbsp;game‑loop timing with SysTick <br/>
    • Week&nbsp;12&nbsp;&ndash;&nbsp;scoreboard splash screen + EEPROM save
  </p>

  {/* 3. Successes & failures */}
  <h3>Successes&nbsp;&amp;&nbsp;Roadblocks 🛣️</h3>
  <ul>
    <li><strong>✅ Success:</strong> 50 FPS refresh without tearing</li>
    <li><strong>✅ Success:</strong> modular render pipeline is reusable</li>
    <li><strong>⚠️ Roadblock:</strong> EMI noise from long LCD ribbon caused ghosting – fixed by
        adding series resistors</li>
    <li><strong>⚠️ Roadblock:</strong> navigation‑switch PCB footprint
        was mirrored (hand‑wired jumper fix)</li>
  </ul>

  {/* 4. ECE skills gained */}
  <h3>ECE Skills Gained 🛠️</h3>
  <ul>
    <li>C/​C++ bare‑metal programming &nbsp;(<code>CMSIS</code>)</li>
    <li>SPI bus analysis on a logic analyzer</li>
    <li>Fixed‑point math for animation timing</li>
    <li>Low‑speed PCB layout &amp; Signal‑Integrity tweaks</li>
  </ul>

  {/* 5. Final thoughts */}
  <h3>Final Thoughts 💡</h3>
  <p>
    Building a game from scratch on real silicon cemented my interest in the
    <strong> Systems &amp; Architecture</strong> thread. I plan to carry the
    project forward next semester by adding BLE so scores sync to a phone
    companion app. Stay tuned!
  </p>
</section>
{/*  ──────────────────────────────────────────  */}


      <p>
        Looking ahead, I’d like to explore <strong>wireless scoreboards</strong> (e.g., logging
        high scores to a remote server), <strong>power optimization</strong> for battery-based
        prototypes, and <strong>advanced graphics</strong> with custom icons or tile-based
        rendering. This project has been a fun deep dive into bridging hardware-level
        programming with an entertaining game experience.
      </p>

      <div className="snake-diagrams">
        <div className="diagram">
          <img src={pinoutImg} alt="LPC1768 Pinout Diagram" />
          <div className="caption">
            📌 <strong>LPC1768 Pinout</strong> &mdash; GPIO and peripheral references for wiring.
          </div>
        </div>
        <div className="diagram">
          <img src={circuitImg} alt="Snake Circuit Layout" />
          <div className="caption">
            📷 <strong>Circuit layout</strong> connecting the LCD, navigation switch, and MBED LPC1768.
          </div>
        </div>
      </div>
    </section>
  );
}
