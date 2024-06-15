import React from "react";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div className="content">
          <h1>Donday Logan</h1>
          <h2>Développeur web</h2>
          <h2>Webdesign</h2>
          <h2>Design UI/UX</h2>
          <div className="pdf">
            <a
              href="https://www.canva.com/design/DAGEcjuQsOU/DuoG5lN3M7uflVKECAP27A/edit?utm_content=DAGEcjuQsOU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visionner mon CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
