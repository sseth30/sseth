import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  openSource,
  blogSection,
  talkSection,
  achievementSection,
  resumeSection
} from "../../portfolio";

function Header() {
  const { isDark } = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;
  const viewResume = resumeSection.display;

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <div className="logo">
          <HashLink smooth to="/#">
            <span className="grey-color">&lt;</span>
            <span className="logo-name">{greeting.username}</span>
            <span className="grey-color">/&gt;</span>
          </HashLink>
        </div>

        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn" style={{ color: "white" }}>
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>

        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li><HashLink smooth to="/#skills">Skills</HashLink></li>
          )}
          {viewExperience && (
            <li><HashLink smooth to="/#experience">Work Experiences</HashLink></li>
          )}
          {viewOpenSource && (
            <li><HashLink smooth to="/#projects">Open Source</HashLink></li>
          )}
          {viewAchievement && (
            <li><HashLink smooth to="/#achievements">Achievements</HashLink></li>
          )}
          {viewBlog && (
            <li><HashLink smooth to="/#blogs">Blogs</HashLink></li>
          )}
          {viewTalks && (
            <li><HashLink smooth to="/#talks">Talks</HashLink></li>
          )}
          {viewResume && (
            <li><HashLink smooth to="/#resume">Resume</HashLink></li>
          )}
          <li><HashLink smooth to="/#contact">Contact Me</HashLink></li>
          <li><Link to="/about">About Me</Link></li>
          <li><ToggleSwitch /></li>
        </ul>
      </header>
    </Headroom>
  );
}

export default Header;
