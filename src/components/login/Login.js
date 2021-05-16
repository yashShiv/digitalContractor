import React from 'react'
import LoginAsCust from './LoginasCustomer';
import LoginAsService from './LoginasService';
import "./style.css"
/**
* @author
* @function Login
**/

const Login = (props) => {
  const [customer, setCustomer] = React.useState(true);
    const [service, setService] = React.useState(false); 

    function toggleToCustomer(){
        setCustomer(true);
        setService(false);
    }

    function toggleToService(){
        setCustomer(false);
        setService(true);
    }

  return(
    <div class="mainBody">
    <div class="login">
    <h1>Login</h1>
    <div class = "mybtn">
      <button className={service=== true ? 'btn btnActive':'btn'} onClick={toggleToService}>Service Men</button>
      <button className={customer=== true ? 'btn btnActive':'btn'} onClick={toggleToCustomer}>Customer</button>
    </div>
        {(customer && <LoginAsCust/>)}
        {(service && <LoginAsService/>)}
    </div>
    </div>
   )

 }

export default Login