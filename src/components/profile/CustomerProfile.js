import React from 'react';
import {NavLink} from 'react-router-dom'
import './style.css';

const CustomerProfile = (props) => {
    const data = props.data;
    const getAddress = (address) => {
        if (!address)
          return undefined;
        return `${address?.house_no || ""} ${address?.city || ""} ${address?.state || ""} ${address?.zip || ""}`;
    }
    return (
    <div className="frame">
        <div className="flash">
            {/* <div className="flash__img">
            <img src={profile_img} alt="" width="320px" height="240px" />
            </div> */}
            <div className="flash__info">
            <span className="flash__info__field flash__info__field--name">{`${data.name.firstname} ${data.name.lastname}`}</span>
            </div>
        </div>
        <div className="detail">
            <h2>Details</h2>
            <div className="detail__pair">
            <span className="detail__pair__key">Mobile Number:</span>
            <span className="detail__pair__value">{data.mobile_number}</span>
            </div>
            <div className="detail__pair">
            <span className="detail__pair__key">Address:</span>
            <span className="detail__pair__value">{getAddress(data.address)}</span>
            </div>
            <div className="detail__pair">
            <span className="detail__pair__key">Email:</span>
            <span className="detail__pair__value">{data.email}</span>
            </div>
        </div>
        <NavLink to={{
            pathname: "/updateData",
            state: {data}
        }}>Update</NavLink>
    </div>
    );
}

export default CustomerProfile;