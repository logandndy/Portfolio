import React from "react";
import iconFigma from "../../img/iconfigma.svg";

const Skills = () => {
  return (
    <div className="otherSkills">
      <h3>autre compétences</h3>
      <div className="list">
        <ul>
          <li>
            <img src="./img/approuver.png" />
            Anglais courant
          </li>
          <li>
            <i></i>Anglais courant
          </li>
          <li>
            <i></i>Anglais courant
          </li>
          <li>
            <i></i>Anglais courant
          </li>
        </ul>
        <ul>
          <li>
            <img src={iconFigma}></img>
            Figma
          </li>
          <li>
            <i></i>UI/UX design
          </li>
          <li>
            <i></i>Anglais courant
          </li>
          <li>
            <i></i>Anglais courant
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
