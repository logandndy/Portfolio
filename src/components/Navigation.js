import React from "react";
import { NavLink } from "react-router-dom";

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
              <i className="fas fa-home"></i>
              <span>Accueil</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/Knowledges" activeClassName="navActive">
              <i className="fas fa-mountain"></i>
              <span>Compétences</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/Contact" activeClassName="navActive">
              <i className="fas fa-home"></i>
              <span>Contact</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/Portfolio" activeClassName="navActive">
              <i className="fas fa-home"></i>
              <span>Portfolio</span>
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
