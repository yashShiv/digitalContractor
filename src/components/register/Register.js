import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
/**
 * @author
 * @function Register
 **/

const Register = (props) => {
  return (
    <div className="mainRegBody">
      <div className="bkg"></div>
      <div class="register">
        <h1>Register</h1>
        <div class="myRegbtn">
          <button class="btn">Service Men</button>
          <button class="btn">Customer</button>
        </div>
        <form method="post" className="loginForm">
          <h2>Email</h2>
          <input
            type="text"
            name="email"
            className="loginInput"
            placeholder="abc@gmail.com"
            required="required"
          />
          <h2>Name</h2>
          <input
            type="text"
            name="username"
            className="loginInput"
            placeholder="Name"
            required="required"
          />
          <h2>Phone</h2>
          <input
            type="text"
            name="phone"
            className="loginInput"
            placeholder="Phone number"
            required="required"
          />
          <h2>Location</h2>
          <input
            type="text"
            name="location"
            className="loginInput"
            placeholder="Your city"
            required="required"
          />
          <h2>Password</h2>
          <input
            type="password"
            name="password"
            className="loginInput"
            placeholder="Password"
            required="required"
          />
          <div style={{ textAlign: "center" }}>
            <button type="submit" className="loginBtn">
              Register
            </button>
          </div>
        </form>
        <div className="registerLink">
          <h4>
            Already registered?{" "}
            <NavLink exact to="/login">
              Login
            </NavLink>{" "}
            here
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Register;
