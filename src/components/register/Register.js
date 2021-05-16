import React from 'react'
import RegisterAsCust from './RegisterasCustomer';
import RegisterAsService from './RegisterasService';
import "./style.css"
/**
* @author
* @function Register
**/


const Register = (props) => {
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
        <div className="mainRegBody">
        <div className="bkg"></div> 
        <div class="register">
            <h1>Register</h1>
            <div class="myRegbtn">
            <button className={service=== true ? 'btn btnActive':'btn'} onClick={toggleToService}>Service Men</button>
            <button className={customer=== true ? 'btn btnActive':'btn'} onClick={toggleToCustomer}>Customer</button>
            </div>
           {(customer && <RegisterAsCust/>)}
           {(service && <RegisterAsService/>)}
        </div>
        </div>
   )

}

export default Register