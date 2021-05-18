import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
/**
* @author
* @function Navbar
**/

const Navbar = (props) => {

  function logout(){
    localStorage.clear()
    window.open('/','_self')

  }
  return(
    <div>
    <nav>
    <input type="checkbox" id="check"></input>
    <label for="check" class="checkbtn">
      <i class="fas fa-bars"></i>
    </label>
    <label class="logo">Digital Contractor</label>
    <ul>
      <li><NavLink exact to="/">Home</NavLink></li>
      <li><NavLink exact to="/about">About</NavLink></li>
      {(        
        localStorage.getItem("type")!=="seller" &&
        <li><NavLink exact to="/services">Services</NavLink></li>

      )}
      {(
        localStorage.getItem("type")==="seller" &&
        <li><NavLink exact to="/contracts">Contracts</NavLink></li>
      )}
      
      <li><NavLink exact to="/contact">Contact</NavLink></li>
      <li><NavLink exact to="/profile"><i className="fa fa-user"></i> Profile</NavLink></li>
      {(localStorage.getItem("jwt")!=null &&
        <button onClick={logout} className="logout">Logout</button>
      )}
    </ul>
  </nav>
    </div>
   )

 }

export default Navbar