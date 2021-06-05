import React from 'react';
import './style.css';

const UpdateCustomerProfile = (props) => {
    const data = props.data;
    return (
    <div className="frame">
        <form className="detail">
            <h2>Update Details</h2>
            <div className="detail__pair">
                <span className="detail__pair__key">Mobile Number:</span>
                <span className="detail__pair__value">{data.mobile_number}</span>
            </div>
            <div className="detail__pair">
                <label htmlFor="firstname" className="detail__pair__key">Mobile Number:</label>
                <input type="text" name="firstname" placeholder={data.name.firstname} className="detail__pair__value" />
            </div>
            <div className="detail__pair">
                <label htmlFor="lastname" className="detail__pair__key">Mobile Number:</label>
                <input type="text" name="lastname" placeholder={data.name.lastname} className="detail__pair__value" />
            </div>
        </form>
    </div>
    )
}

export default UpdateCustomerProfile;