import React from "react";
import { NavLink } from "react-router-dom";
//import Validation from "F:\VIT\Sem 6\Web dev project\digitalContractor\src\components\validation\Validation"
import "./style.css";

const intialState={
  name:"",
  email: "",
  password: "",
  phone: "",
  location: "" ,
  nameError:"",
  emailError: "",
  passwordError: ""

};

export default class ValiationForm extends React.Component {
  state = intialState;

  handleChange = event => {
    //const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: 
        //? event.target.checked
         event.target.value
    });
  };

  validate = () => {

    let nameError = "";
    let emailError = "";

    if (!this.state.name) {
      nameError = "name cannot be blank";
    }

    if (!this.state.email.includes("@")) {
      emailError = "invalid email";
    }

    if (emailError || nameError) {
      this.setState({ emailError, nameError });
      return false;
    }

    return true;
  };

  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      // clear form
      this.setState(intialState);
    }
  };

  render() {
    return (

      <div className="mainRegBody">
      <div className="bkg"></div> 
      <div class="register">
        <h1>Register</h1>
        <div class="myRegbtn">
          <button class="btn">Service Men</button>
          <button class="btn">Customer</button>
        </div>
        <form className="loginForm">
          <h2>Email</h2>
          <input
            type="email"
            name="email"
            className="loginInput"
            value={this.state.email}
            onChange = {this.handleChange}
            placeholder="abc@gmail.com"
            required="required"
          />
           <div style={{ fontSize: 12, color: "red" }}>
            {this.state.emailError}
          </div>

          <h2>Name</h2>
          <input
            type="text"
            name="name"
            className="loginInput"
            value={this.state.name}
            onChange = {this.handleChange}
            placeholder="Name"
            required="required"
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.nameError}
          </div>
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
            value={this.state.password}
            onChange={this.handleChange}
            placeholder="Password"
            required="required"
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.passwordError}
          </div>
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
  }
}
