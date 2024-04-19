import React, { Component } from "react";
import { portfolioData } from "../../data/portfolioData";
import Project from "./Project";

export default class ProjectList extends Component {
  state = {
    projects: portfolioData,
    radios: [
      { id: 1, value: "figma" },
      { id: 2, value: "adobe XD" },
      { id: 3, value: "sketch" },
    ],
    selectedRadio: [], // Initialisation avec un tableau vide
  };

  componentDidMount() {
    // Sélectionner tous les radios par défaut
    this.setState({
      selectedRadio: this.state.radios.map((radio) => radio.value),
    });
  }

  handleRadio = (event) => {
    const { value } = event.target;
    this.setState((prevState) => {
      const { selectedRadio } = prevState;
      if (selectedRadio.includes(value)) {
        // Si la valeur est déjà sélectionnée, la retirer du tableau
        return {
          selectedRadio: selectedRadio.filter((radio) => radio !== value),
        };
      } else {
        // Sinon, ajouter la nouvelle valeur au tableau
        return { selectedRadio: [...selectedRadio, value] };
      }
    });
  };

  render() {
    const { projects, radios, selectedRadio } = this.state;

    return (
      <div className="portfolioContent">
        <ul className="radioDisplay">
          {radios.map((radio) => {
            return (
              <li key={radio.id}>
                <input
                  className="checkbox"
                  type="checkbox" // Utilisation de checkbox pour permettre la sélection multiple
                  name="radio"
                  checked={selectedRadio.includes(radio.value)}
                  value={radio.value}
                  id={radio.value}
                  onChange={this.handleRadio}
                  defaultChecked={true} // Ajout de defaultChecked pour la sélection par défaut
                />
                <label htmlFor={radio.value}>{radio.value}</label>
              </li>
            );
          })}
        </ul>

        <div className="projects">
          {projects
            .filter((item) =>
              item.languages.some((lang) => selectedRadio.includes(lang))
            )
            .map((item) => {
              return <Project key={item.id} item={item} />;
            })}
        </div>
      </div>
    );
  }
}
