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
              href="/Mon objectif est de me professionnaliser dans le métier de Designer UXUI.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Télecharger mon CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
