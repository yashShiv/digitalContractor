import React from 'react'
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
      <li><a class="active" href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
      <li><button className="menuDropdown"><i className="fa fa-user"></i> Profile</button></li>
    </ul>
  </nav>
    </div>
   )

 }

export default Navbar