import React from "react";
import iconFigma from "../../img/iconfigma.svg";
import iconXd from "../../img/iconadobexd.svg";
const Skills = () => {
  return (
    <div className="otherSkills">
      <h3>autre compétences</h3>
      <div className="list">
        <ul>
          <li>Adobe XD</li>
          <li>
            <img></img>
            Wordpress
          </li>
          <li>Github</li>
        </ul>
        <ul>
          <li>Figma</li>
          <li>
            <img></img>
            UI/UX design
          </li>
          <li>
            <img />
            Utilisation de l'IA
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
