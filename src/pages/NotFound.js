import React from "react";
import { NavLink } from "react-router-dom";
import homeIcon from "../img/accueil.png";

const NotFound = () => {
  return (
    <div className="notFound">
      <div className="notFoundContent">
        <h3>Désolé cette page n'existe pas</h3>
        <NavLink exact to="/">
          <div className="nav-notFound">
            <img src={homeIcon} alt="Home" className="pngHome" />
            <span>Accueil</span>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
