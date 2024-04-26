import React from "react";
import { NavLink } from "react-router-dom";
import homeIcon from "../img/accueil.png";
import KnowledgesIcon from "../img/competences-techniques.png";
import contactIcon from "../img/livre-de-contact.png";
import portfolioIcon from "../img/renseignements-personnels.png";
import linkedinIcon from "../img/signe-linkedin.png";
import githubIcon from "../img/signe-github.png";
import twitterIcon from "../img/icons8-twitter.svg";

const Navigation = () => {
  return (
    <div className="sidebar">
      <div className="id">
        <div className="idContent">
          <h1>Logan</h1>
        </div>
      </div>
      <div className="navigation">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "navActive" : "")}
            >
              <div className="nav-item">
                <img src={homeIcon} alt="Home" className="pngHome" />
                <span>Accueil</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/Knowledges"
              className={({ isActive }) => (isActive ? "navActive" : "")}
            >
              <div className="nav-item">
                <img
                  src={KnowledgesIcon}
                  alt="Knowledges"
                  className="pngKnowledges"
                />
                <span>Compétences</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/Portfolio"
              className={({ isActive }) => (isActive ? "navActive" : "")}
            >
              <div className="nav-item">
                <img
                  src={portfolioIcon}
                  alt="Portfolio"
                  className="pngPortfolio"
                />
                <span>Portfolio</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/Contact"
              className={({ isActive }) => (isActive ? "navActive" : "")}
            >
              <div className="nav-item">
                <img src={contactIcon} alt="Contact" className="pngContact" />
                <span>Contact</span>
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="socialNetwork">
        <ul>
          <li>
            <div className="nav-res">
              <a
                href="https://github.com/logandndy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={githubIcon} alt="res" className="pngGithub" />
              </a>
            </div>
          </li>
          <li>
            <div className="nav-res">
              <a
                href="https://www.linkedin.com/in/logan-donday-654274220/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedinIcon} alt="res" className="pngLinkedin" />
              </a>
            </div>
          </li>
        </ul>
      </div>
      <div className="signature">
        <p>Logan donday -2024</p>
      </div>
    </div>
  );
};

export default Navigation;
