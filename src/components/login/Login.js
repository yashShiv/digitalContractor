import React from 'react'
import './style.css'
/**
* @author
* @function Login
**/

const Login = (props) => {
  return(
    <div>
    <div class="login">
    <h1>Login</h1>
    <div class = "mybtn">
      <button class = "btn">Service Men</button>
      <button class = "btn">Customer</button>
    </div>
      <form method="post" className="loginForm">
        <h2>Email</h2>
        <input type="text" name="email" className="loginInput" placeholder="abc@gmail.com" required="required" />
        <h2>Password</h2>
        <input type="password" name="password" className="loginInput" placeholder="Password" required="required" />
        <div style={{textAlign:'center'}}>
        <button type="submit" className="loginBtn">Login</button>
        </div>
      </form>
      <div className="registerLink">
        <h4>New user? <a className="register" href="#">Register</a> here</h4>
      </div>
    </div>
    </div>
   )

 }

export default Login