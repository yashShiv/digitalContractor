import React from 'react';
import "./style.css";

const HomePage = () => {

  return (
    <div className = "home">
      <div className = "top">
        <div className="top__buttons">
          <button class="top__button">Register</button>
          <button class="top__button">Login</button>
        </div>
      </div>
      <main className = "info">
        <div className="info__section">
          <div className="info__section__text">
            <h1>Best Plumbing Services.</h1>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et culpa in, quibusdam consequatur magni voluptate quidem similique suscipit voluptatem temporibus labore sint saepe doloremque. Tenetur dolorum laboriosam temporibus quasi tempora.
          </div>
          <div className="info__section__img"></div>
        </div>
        <div className="info__section">
          <div className="info__section__img"></div>
          <div className="info__section__text">
            <h1>Best Plumbing Services.</h1>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et culpa in, quibusdam consequatur magni voluptate quidem similique suscipit voluptatem temporibus labore sint saepe doloremque. Tenetur dolorum laboriosam temporibus quasi tempora.
          </div>
        </div>
        <div className="info__section">
          <div className="info__section__text">
            <h1>Best Plumbing Services.</h1>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et culpa in, quibusdam consequatur magni voluptate quidem similique suscipit voluptatem temporibus labore sint saepe doloremque. Tenetur dolorum laboriosam temporibus quasi tempora.
          </div>
          <div className="info__section__img"></div>
        </div>
      </main>
    </div>
  )

};

export default HomePage;