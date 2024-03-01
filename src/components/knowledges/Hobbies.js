import React from "react";
import sportIcon from "../../img/gym.svg";
import cryptoIcon from "../../img/coin-2-svgrepo-com.svg";
import nutriIcon from "../../img/meal-11-svgrepo-com.svg";

const hobbies = () => {
  return (
    <div className="hobbies">
      <h3>Intérêts</h3>
      <ul>
        <li className="hobby">
          <img src={sportIcon} alt="Sport" className="svgSport" />
          <span>Sport</span>
        </li>
        <li className="hobby">
          <img src={cryptoIcon} alt="Crypto" className="svgCrypto" />
          <span>web3</span>
        </li>
        <li className="hobby">
          <svg
            class="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 18.5A2.5 2.5 0 0 1 7.5 20h0a2.5 2.5 0 0 1-2.4-3.2 3 3 0 0 1-.8-5.2 2.5 2.5 0 0 1 .9-3.2A2.5 2.5 0 0 1 7 5a2.5 2.5 0 0 1 5 .5m0 13v-13m0 13a2.5 2.5 0 0 0 4.5 1.5h0a2.5 2.5 0 0 0 2.4-3.2 3 3 0 0 0 .9-5.2 2.5 2.5 0 0 0-1-3.2A2.5 2.5 0 0 0 17 5a2.5 2.5 0 0 0-5 .5m-8 5a2.5 2.5 0 0 1 3.5-2.3m-.3 8.6a3 3 0 0 1-3-5.2M20 10.5a2.5 2.5 0 0 0-3.5-2.3m.3 8.6a3 3 0 0 0 3-5.2"
            />
          </svg>
          <span>Intelligence artificielle </span>
        </li>
        <li className="hobby">
          <img src={nutriIcon} alt="Nutri" className="svgNutri" />
          <span>Nutrition</span>
        </li>
      </ul>
    </div>
  );
};

export default hobbies;
