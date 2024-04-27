import React, { Component } from "react";
import iconplus from "../../img/icons8-plus.svg";

export default class Project extends Component {
  state = {
    showInfo: false,
  };

  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };

  handleExit = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };

  render() {
    let { name, languagesIcons, source, source1, info, picture } =
      this.props.item;
    const infoSegments = info.match(/.{1,100}/g);
    const infoParagraphs = infoSegments.map((segment, index) => (
      <p key={index}>{segment}</p>
    ));
    return (
      <div className="project">
        <div className="icons">
          <div className="iconsimg">
            {languagesIcons.map((iconPath, index) => (
              <img
                className="imgIcons"
                src={iconPath}
                alt={`Icone ${index}`}
                key={index}
              />
            ))}
          </div>

          <h3>{name}</h3>
          <img
            className="imgProject"
            src={picture}
            alt=""
            onClick={this.handleInfo}
          />
          <span className="infos" onClick={this.handleInfo}>
            <img src={iconplus}></img>
          </span>

          {this.state.showInfo && (
            <div className="showInfos">
              <div className="infosContent">
                <div className="head">
                  <h2>{name}</h2>
                  <div className="sourceCode">
                    <a
                      href={source}
                      rel="noopener noreferrer"
                      className="button"
                      target="_blank"
                    >
                      Maquette
                    </a>
                    {source1 && ( // Utilisation du rendu conditionnel pour vérifier si source1 est défini
                      <a
                        href={source1}
                        rel="noopener noreferrer"
                        className="button"
                        target="_blank"
                      >
                        Code source
                      </a>
                    )}
                  </div>
                  <p className="text">{info}</p>{" "}
                  {/* Affichage du texte complet */}
                </div>
                <div className="button return" onClick={this.handleInfo}>
                  Retourner sur la page
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
