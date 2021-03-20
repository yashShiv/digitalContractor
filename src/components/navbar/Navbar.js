import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
/**
* @author
* @function Navbar
**/

const Navbar = (props) => {
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
      <li><a href="#">Services</a></li>
      <li><NavLink exact to="/contact">Contact</NavLink></li>
      <li><NavLink exact to="/profile"><i className="fa fa-user"></i> Profile</NavLink></li>
    </ul>
  </nav>
    </div>
   )

 }

export default Navbar