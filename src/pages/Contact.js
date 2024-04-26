import React from "react";
import Navigation from "../components/Navigation";
import { CopyToClipboard } from "react-copy-to-clipboard";
import iconGit from "../img/signe-github.png";
import iconLinked from "../img/signe-linkedin.png";
import icontel from "../img/icons8-telephone-50.png";
import iconlocation from "../img/icons8-location-64.png";
import iconmail from "../img/icons8-mail-50.png";

const Contact = () => {
  return (
    <div className="contact">
      <Navigation />
      <div className="contactContent">
        <div className="contactBox">
          <h1>Contactez-moi</h1>
          <ul>
            <li>
              <img src={iconlocation}></img>
              <span>Toulouse</span>
            </li>
            <li>
              <img src={icontel}></img>
              <CopyToClipboard text="07 89 40 81 12">
                <span
                  className="clickInput"
                  onClick={() => {
                    alert("Téléphone copié !");
                  }}
                >
                  07 89 40 81 12
                </span>
              </CopyToClipboard>
            </li>
            <li>
              <img src={iconmail}></img>
              <CopyToClipboard text="dondaylogan2@gmail.com">
                <span
                  className="clickInput"
                  onClick={() => {
                    alert("E-mail copié !");
                  }}
                >
                  dondaylogan2@gmail.com
                </span>
              </CopyToClipboard>
            </li>
          </ul>
        </div>
        <div className="socialNetwork">
          <ul>
            <a
              href="https://www.linkedin.com/in/logan-donday-654274220/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>LinkedIn</h4>
              <img src={iconLinked}></img>
            </a>
            <a
              href="https://github.com/logandndy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>Github</h4>
              <img src={iconGit}></img>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
