import React from 'react';
import "./style.css";

const HomePage = () => {

  return (
    <div className = "home">
      <div className = "top">
        <button class="top__button">Register</button>
        <button class="top__button">Login</button>
      </div>
      <main className = "info">
        <div className="info__section">
          <div className="info__section__text"></div>
          <div className="info__section__img"></div>
        </div>
      </main>
    </div>
  )

};

export default HomePage;