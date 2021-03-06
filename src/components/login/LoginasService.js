import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'

const intialState={
  email: "",
  password: "",
  emailError: "",
  passwordError: "",
};

export default class LoginAsCust extends React.Component {
  state = intialState;

  handleChange = event => {
    this.setState({
      [event.target.name]: 
         event.target.value
    });
  };

  validate = () => {

    let emailError = "";
    let passwordError = "";

    var ck_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    var ck_password = /^[A-Za-z0-9!@#$%^&*()_]{6,20}$/;


    if (!ck_email.test(this.state.email)) {
      emailError = "Invalid Email";
    }

    if (!ck_password.test(this.state.password)) {
      passwordError = "Password supports special characters and here min length 6 max 20 charters.";
    }

    if (emailError || passwordError ) {
      this.setState({ emailError:emailError, passwordError:passwordError });
      return false;
    }

    return true;
  };

  handleSubmit = event => {
    const isValid = this.validate();
    console.log(isValid);
    if (isValid) {
      console.log(this.state);
      console.log("signin")
      const formElement = document.getElementById("login-form1");
      const formData = new FormData(formElement);
      let requestBody = {
        email: "",
        password: "",
      };
      requestBody.email = formData.get('email');
      requestBody.password = formData.get('password');
      
      fetch('/signin/s', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(requestBody)
      }).then(res=>res.json())
      .then(data => {
        if(data.token) {
          localStorage.setItem("jwt", data.token);
          localStorage.setItem("type", "seller");
          console.log("Signin Successful");
          window.open('/','_self')

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
      <form className="loginForm" id="login-form1">

        <h2>Email</h2>
        <input type="text" name="email" className="loginInput" value={this.state.email} onChange={this.handleChange} placeholder="abc@gmail.com" required="required" />
        <div style={{ fontSize: 12, color: "red" }}>
            {this.state.emailError}
        </div>

        <h2>Password</h2>
        <input type="password" name="password" className="loginInput" value={this.state.password} onChange={this.handleChange}  placeholder="Password" required="required" />
        <div style={{ fontSize: 12, color: "red" }}>
            {this.state.passwordError}
        </div>

        <div style={{textAlign:'center'}}>
        <button type="submit" className="loginBtn" onClick={this.handleSubmit} >Login</button>
        </div>
      </form>
      <div className="registerLink">
        <h4>New user? <NavLink exact to="/register">Register</NavLink> here</h4>
      </div>
      </>

    );
  }
}

