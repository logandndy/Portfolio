import React from "react";
import iconFigma from "../../img/iconfigma.svg";
import iconXd from "../../img/iconadobexd.svg";
const Skills = () => {
  return (
    <div className="otherSkills">
      <h3>autre compétences</h3>
      <div className="list">
        <ul>
          <li>
            <img />
            Anglais
          </li>
          <li>
            <img src={iconXd}></img>
            Adobe XD
          </li>
          <li>
            <img></img>
            Figma
          </li>
          <li>
            <img src={iconFigma}></img>
            Figma
          </li>
        </ul>
        <ul>
          <li>
            <img src={iconFigma}></img>
            Figma
          </li>
          <li>
            <img></img>
            UI/UX design
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
