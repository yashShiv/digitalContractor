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
  service: "",
  nameError:"",
  emailError: "",
  passwordError: "",
  phoneError: "",
  serviceError: "",
};

export default class RegisterAsService extends React.Component {
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
    let passwordError = "";
    let phoneError = "";
    let serviceError = "";

    var ck_name = /^[A-Za-z0-9 ]{3,100}$/;
    var ck_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    var ck_password = /^[A-Za-z0-9!@#$%^&*()_]{6,20}$/;
    var ck_phone = /^\d{10}$/;

    if (!ck_name.test(this.state.name)) {
      nameError = "Alphabets, numbers and space(' ') no special characters min 3 and max 20 characters.";
    }
    
    if (!ck_email.test(this.state.email)) {
      emailError = "Invalid Email";
    }

    if (!ck_password.test(this.state.password)) {
      passwordError = "Password supports special characters and here min length 6 max 20 charters.";
    }

    if (!ck_phone.test(this.state.phone)) {
      phoneError = "Must contain 10 digits only";
    }

    if (this.state.service === "") {
      serviceError = "Please choose a service";
    }

    
    if (emailError || nameError || passwordError || phoneError || serviceError ) {
      this.setState({ emailError:emailError, nameError:nameError , passwordError:passwordError , phoneError:phoneError, serviceError:serviceError  });
      console.log("Validation Error");
      return false;
    }

    console.log("Validation Successful");
    return true;
  };

  handleSubmit = event => {
    const isValid = this.validate();
    console.log(this.state)
    console.log(isValid);
    if (isValid) {
      console.log(this.state);
      const formElement = document.getElementById("login-form");
      const formData = new FormData(formElement);
      const [firstname, lastname] = formData.get('name').split(" ", 2);
      let requestBody = {
        name: {
          firstname: firstname,
          lastname: lastname,
        },
        email: "",
        password: "",
        service: "",
      };
      requestBody.email = formData.get('email');
      requestBody.password = formData.get('password');
      requestBody.service = formData.get('service');
      fetch('/signup/s', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(requestBody)
      }).then(res=>res.json())
      .then(data => {
        if(data.token) {
          console.log("SignUp Successful");
        } else {
          console.log(data)
        }
      });
      this.setState(intialState);
      event.preventDefault();
    }
  };

  render() {
    return (

      <>
      <h2 style={{textAlign:"center", marginTop:"45px"}}>Boost your reach to all over India...</h2>
        <form className="loginForm" id="login-form">
          <h2>Email</h2>
          <input
            type="text"
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
            value={this.state.phone}
            onChange={this.handleChange}
            className="loginInput"
            placeholder="Phone number"
            required="required"
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.phoneError}
          </div>
          <h2>Location</h2>
          <input
            type="text"
            name="location"
            className="loginInput"
            placeholder="Your city"
            required="required"
          />
          <h2>Service</h2>
          <select name="service" required="required" onChange={this.handleChange} value={this.state.service}>
            <option value="">Please select a service</option>
            <option value="Carpenter">Carpenter</option>
            <option value="Electrician">Electrician</option>
            <option value="Plumber">Plumber</option>
            <option value="Builder">Builder</option>
          </select>
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.serviceError}
          </div>
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
            <button type="button" className="loginBtn" onClick={this.handleSubmit}>
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
      </>

    );
  }
}
