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
  passwordError: "",
  phoneError: "",

};

export default class RegisterAsCust extends React.Component {
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

    var ck_name = /^[A-Za-z0-9 ]{3,20}$/;
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

    

    if (emailError || nameError || passwordError || phoneError ) {
      this.setState({ emailError:emailError, nameError:nameError , passwordError:passwordError , phoneError:phoneError  });
      return false;
    }

    return true;
  };

  handleSubmit = event => {
    const isValid = this.validate();
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
        mobile_number: "",
        address: {
          city: "",
        }
      };
      requestBody.email = formData.get('email');
      requestBody.password = formData.get('password');
      requestBody.mobile_number = formData.get('phone');
      requestBody.address.city = formData.get('location');
      fetch('/signup/c', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(requestBody)
      }).then(res=>res.json())
      .then(data => {
        if(data.token) {
          console.log("SignUp Successful");
          window.open('/login','_self')

        } else {
          console.log(data)
        }
      });
      event.preventDefault();
      this.setState(intialState);
    }
  };

  render() {
    return (

      <>
      <h2 style={{textAlign:"center", marginTop:"45px"}}>Services according to your needs...</h2>
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
            value={this.state.location}
            onChange={this.handleChange}
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
