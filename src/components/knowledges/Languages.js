import React, { Component } from "react";
import ProgressBar from "./progressBar";

export default class languages extends Component {
  state = {
    languages: [
      { id: 1, value: "Javascript", xp: 0.8 },
      { id: 2, value: "Css", xp: 1.8 },
      { id: 3, value: "Php", xp: 1 },
    ],
    Logiciels: [
      { id: 1, value: "Figma", xp: 0.8 },
      { id: 2, value: "Adobe XD", xp: 0.3 },
      { id: 3, value: "Sketch", xp: 0.3 },
    ],
    frameworks: [
      { id: 1, value: "React", xp: 0.3 },
      { id: 2, value: "Sass", xp: 0.3 },
    ],
  };
  render() {
    let { languages, Logiciels, frameworks } = this.state;
    return (
      <div className="languagesFrameworks">
        <ProgressBar
          languages={languages}
          className="languagesDisplay"
          title="languages"
        />
        <ProgressBar
          languages={Logiciels}
          title="Logiciels"
          className="logicielsDisplay"
        />
        <ProgressBar
          languages={frameworks}
          title="frameworks & bibliothèques"
          className="frameworksDisplay"
        />
      </div>
    );
  }
}
