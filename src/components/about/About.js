import React from 'react'
import './style.css'
import construction from '../../html/about/construction.jpg';
/**
* @author
* @function About
**/

const About = (props) => {
  return(
    <div>
  
  <div className="row">
    <div className="leftcolumn">
      <div className="leftcard">
        <h2 style={{textAlign:"center"}}> Digital Contractor : A One Stop Solution  </h2>
        <hr></hr>
        <div className="topimg"><img src={construction} height="400px" width="80%"></img></div>
        <p className="aboutMainContent">Our project aims to provide the customers a single and reliable digital platform to hire specialised professionals or workers for construction or rennovation projects. 
        User can find workers from different fields such as carpentry, painting and construction in accordance to their budgets and requirements. This would help common people as well as the migrant workers who have lost their jobs due to pandemic.</p>
      </div>
      
    </div>
    <div className="rightcolumn">
      <div className="card">
        <h1 style={{marginBottom:"20px"}} className="aboutHeading"><em>Our Motto</em></h1>
        <p className="aboutContent">
        " We belive its not just a house or an apartment , Its your home. We at Digital Contractor ensure you get best services for your lovely place."
      </p>
      </div>
      <div className="card">
        <h1 style={{marginBottom:"20px"}} className="aboutHeading">A Quick Tour</h1>
        <div className="videotags">
        <iframe title="ifr" className="iframeVideo" height="200" src="https://www.youtube.com/embed/1WRli_cYfvw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
      <div className="card">
        <div className="videotags">
          <video className="iframeVideo" width="300" height="200" controls>
            <source src="zomato_ad.mp4" type="video/mp4"></source>
          </video>
        </div>
          <a href="https://www.zomato.com/bhilwara/restaurants?context=delivery">Order Now</a>
      </div>
    </div>
  </div>
    </div>
   )

 }

export default About