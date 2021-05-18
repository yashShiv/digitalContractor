import React from 'react';
import { NavLink } from 'react-router-dom';
import "./style.css";

const HomePage = () => {

  return (
    <div className = "home">
      <div className = "top">
        <h1 className="homeHeading">Hire professionals here.</h1>
        <div style={{textAlign:"center", color:"white", padding:"50px"}}>
        <h1>We provide specialised workers & professionals from all sorts of fields.</h1>
        <h1>Select the kind of work you need to have, search for it in our services section, filter according to your budget and location.</h1>
        </div>
        {(localStorage.getItem("jwt")==null
          &&
          <div className="top__buttons">
            <NavLink className="no_style_link" exact to="/register">
              <button className="top__button">Register</button>
            </NavLink>
            <NavLink className="no_style_link" exact to="/login">
              <button className="top__button">Login</button>
            </NavLink>
        </div>
        )}
        
      </div>
      <main className = "info">
        <div className="info__section">
          <div className="info__section__text">
            <h1>Best Plumbing Services.</h1>
            <p className="aboutMainContent">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et culpa in, quibusdam consequatur magni voluptate quidem similique suscipit voluptatem temporibus labore sint saepe doloremque. Tenetur dolorum laboriosam temporibus quasi tempora.</p>
          </div>
          <div className="info__section__img"></div>
        </div>
        <hr style={{margin:"40px"}}></hr>
        <div className="info__section">
          <div className="info__section__img"></div>
          <div className="info__section__text">
            <h1>Best Plumbing Services.</h1>
            <p className="aboutMainContent">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et culpa in, quibusdam consequatur magni voluptate quidem similique suscipit voluptatem temporibus labore sint saepe doloremque. Tenetur dolorum laboriosam temporibus quasi tempora.</p>
          </div>
        </div>
        <hr style={{margin:"40px"}}></hr>
        <div className="info__section">
          <div className="info__section__text">
            <h1>Best Plumbing Services.</h1>
            <p className="aboutMainContent">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et culpa in, quibusdam consequatur magni voluptate quidem similique suscipit voluptatem temporibus labore sint saepe doloremque. Tenetur dolorum laboriosam temporibus quasi tempora.</p>
          </div>
          <div className="info__section__img"></div>
        </div>
      </main>
    </div>
  )

};

export default HomePage;