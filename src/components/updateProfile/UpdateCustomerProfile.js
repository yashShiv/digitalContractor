import React from 'react';
import _ from 'lodash';
import './style.css';

const UpdateCustomerProfile = (props) => {
    const data = props.data;

    const validators = {
        'firstname': /^[A-Za-z0-9 ]{3,20}$/,
        'lastname': /^[A-Za-z0-9 ]{3,20}$/,
        'email': /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
        'mobile_number': /^\d{10}$/,
    }

    const validateData = (formData) => {
        let isFailed = false;
        for(const validator in validators) {
            const data = formData.get(validator);
            if(data != '' && !validators[validator].test(data)) {
                const inputEle = document.querySelector(`input[name=${validator}]`)
                inputEle.classList.add('error_input');
                isFailed = true;
            }
        }
        return isFailed;
    }

    const resetErrorStyle = (e) => {
        e.target.classList.remove('error_input');
    }

    const submitData = (e) => {
        e.preventDefault();
        const formEle = document.getElementById('form');
        const form = new FormData(formEle);
        if(validateData(form)) return;
        let requestBody = {};
        let name = {};
        let address = {};
        for(const [key, val] of form) {
            const [fKey, sKey] = key.split('.');
            console.log(fKey, sKey);
            if(fKey === 'name') {
                if(val !== '') {
                    name[sKey] = val;
                }
            } else if(fKey === 'address') {
                if(val !== '') {
                    address[sKey] = val;
                }
            } else {
                if(val !== '') {
                    requestBody[fKey] = val;
                }
            }
        }
        if(!_.isEmpty(name)) {
            requestBody["name"] = {...name};
        }
        if(!_.isEmpty(address)) {
            requestBody["address"] = {...address};
        }
        fetch('/api/c/user', {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${localStorage.getItem('jwt')}`
            },
            body: JSON.stringify(requestBody)
          }).then(res=>res.json())
          .then(data => {
              console.log(data);
              window.open('/profile','_self');
          });
    }

    return (
    <div className="frame">
        <form id="form" className="detail">
            <h2>Update Details</h2>
            <div className="input__pair">
                <label htmlFor="name.firstname" className="input__pair__key">Firstname:</label>
                <input type="text" onFocus={resetErrorStyle} name="name.firstname" placeholder={data.name.firstname} className="input__pair__value" />
            </div>
            <div className="input__pair">
                <label htmlFor="name.lastname" className="input__pair__key">Lastname:</label>
                <input type="text" onFocus={resetErrorStyle} name="name.lastname" placeholder={data.name.lastname} className="input__pair__value" />
            </div>
            <div className="input__pair">
                <label htmlFor="email" className="input__pair__key">Email:</label>
                <input type="text" onFocus={resetErrorStyle} name="email" placeholder={data.email} className="input__pair__value" />
            </div>
            <div className="input__pair">
                <label htmlFor="mobile_number" className="input__pair__key">Mobile number:</label>
                <input type="text" onFocus={resetErrorStyle} name="mobile_number" placeholder={data.mobile_number} className="input__pair__value" />
            </div>
            <h4>Address</h4>
            <div className="input__pair">
                <label htmlFor="address.state" className="input__pair__key">State: </label>
                <input type="text" onFocus={resetErrorStyle} name="address.state" placeholder={data.address.state || 'Enter state'} className="input__pair__value" />
            </div>
            <div className="input__pair">
                <label htmlFor="address.city" className="input__pair__key">City: </label>
                <input type="text" onFocus={resetErrorStyle} name="address.city" placeholder={data.address.city || 'Enter city'} className="input__pair__value" />
            </div>
            <div className="input__pair">
                <label htmlFor="address.zip" className="input__pair__key">Zip code: </label>
                <input type="text" onFocus={resetErrorStyle} name="address.zip" placeholder={data.address.zip || 'Enter zip code'} className="input__pair__value" />
            </div>
            <div className="input__pair">
                <label htmlFor="address.house_no" className="input__pair__key">House no: </label>
                <input type="text" onFocus={resetErrorStyle} name="address.house_no" placeholder={data.address.house_no || 'Enter house number'} className="input__pair__value" />
            </div>
            <div className="input__pair">
                <label htmlFor="address.landmark" className="input__pair__key">Landmark: </label>
                <input type="text" onFocus={resetErrorStyle} name="address.landmark" placeholder={data.address.landmark || 'Enter a landmark'} className="input__pair__value" />
            </div>
            <button onClick={submitData}>Update</button>
        </form>
    </div>
    )
}

export default UpdateCustomerProfile;