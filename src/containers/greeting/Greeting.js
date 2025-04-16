import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { illustration, greeting } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const { isDark } = useContext(StyleContext);
  const [isLottieReady, setIsLottieReady] = useState(false);

  useEffect(() => {
    // Artificial delay removed — we preload instantly
    setIsLottieReady(true);
  }, []);

  if (!greeting.displayGreeting) return null;

  return (
    <div className="greet-main" id="greeting">
      <div className="greeting-main">
        <div className="greeting-text-div">
          <Fade bottom duration={1000} distance="40px">
            <div>
              <h1 className={isDark ? "dark-mode greeting-text" : "greeting-text"}>
                Hi, I'm Satchit <span className="wave-emoji">{emoji("👋")}</span>
                  </h1>
              <p className={isDark ? "dark-mode greeting-text-p" : "greeting-text-p subTitle"}>
                {greeting.subTitle}
              </p>
              <div id="resume" className="empty-div"></div>
              <SocialMedia />
              <div className="button-greeting-div">
                {greeting.resumeLink && (
                  <a
                    href={greeting.resumeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="download-link-button"
                  >
                    <Button text="Download my resume" />
                  </a>
                )}
                <Link to="/about" className="download-link-button">
                  <Button text="About Me" />
                </Link>
              </div>
            </div>
          </Fade>
        </div>

        <div className="greeting-image-div animated-character">
          {illustration.animated && isLottieReady ? (
            <DisplayLottie animationData={landingPerson} />
          ) : (
            <img
              alt="man sitting on table"
              src={require("../../assets/images/manOnTable.svg")}
            />
          )}
        </div>
      </div>
    </div>
  );
}
