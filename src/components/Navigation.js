import React from "react";
import { NavLink } from "react-router-dom";
import homeIcon from "../img/accueil.png";
import KnowledgesIcon from "../img/competences-techniques.png";
import contactIcon from "../img/livre-de-contact.png";
import portfolioIcon from "../img/renseignements-personnels.png";

const Navigation = () => {
  return (
    <div className="sidebar">
      <div className="id">
        <div className="idContent">
          <img src="./media/dessinwo.png" alt="profil-pic" />
          <h1>Logan</h1>
        </div>
      </div>
      <div className="navigation">
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="navActive">
              <div className="nav-item">
                <img src={homeIcon} alt="Home" className="pngHome" />
                <span>Accueil</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/Knowledges" activeClassName="navActive">
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
            <NavLink exact to="/Portfolio" activeClassName="navActive">
              <div className="nav-item">
                <img
                  src={portfolioIcon}
                  alt="Portfolio"
                  className="pngPortfolio"
                />
                <span>Compétences</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/Contact" activeClassName="navActive">
              <div className="nav-item">
                <img src={contactIcon} alt="Contact" className="pngContact" />
                <span>Compétences</span>
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="socialNetwork">
        <ul>
          <li>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-codepen">codepen</i>
            </a>
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
