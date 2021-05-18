import React, {useEffect, useState} from "react";
import profile_img from "../../carpenter-temp.jpeg";
import asset_img from "../../gallery/img1.jpg";
import "./style.css";

const Profile = () => {
  const [userData, setUserData] = useState({})
  let type = localStorage.getItem("type");
  useEffect(() => {
    if (type === "seller") {
      fetch('/api/s/user', {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem('jwt')}`
        }
      }).then(response=>response.json())
        .then(data => {
          setUserData(data.data);
        })
    } else {
      fetch('/api/c/user', {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem('jwt')}`
        }
      }).then(response=>response.json())
        .then(data => {
          setUserData(data.data);
        })
    }
  }, [type]);

  const getAddress = (address) => {
    if (!address)
      return undefined;
    return `${address?.house_no || ""} ${address?.city || ""} ${address?.state || ""} ${address?.zip || ""}`;
  }

  return (
    <div className="frame">
      <div className="flash">
        <div className="flash__info">
          <span className="flash__info__field flash__info__field--name">{`${userData?.name?.firstname || "Loading"} ${userData?.name?.lastname || "Loading"}`}</span>
          <span className={"flash__info__field flash__info__field--profession" + (type === 'customer' ? ' hidden' : '')}>{`${userData?.service || "Loading"}`}</span>
        </div>
      </div>
      <div className="detail">
        <h2>Details</h2>
        <div className="detail__pair">
          <span className="detail__pair__key">Mobile Number:</span>
          <span className="detail__pair__value">{`${userData?.mobile_number || "Loading"}`}</span>
        </div>
        <div className={"detail__pair" + (type === 'customer' ? ' hidden' : '')}>
          <span className="detail__pair__key">Experience:</span>
          <span className="detail__pair__value">{`${userData?.experience || "Loading"}`} years</span>
        </div>
        <div className={"detail__pair" + (type === 'customer' ? ' hidden' : '')}>
          <span className="detail__pair__key">Charge:</span>
          <span className="detail__pair__value">Rs. {`${userData?.rate || "Loading"}`}/ {`${userData?.unit || "Loading"}`}</span>
        </div>
        <div className="detail__pair">
          <span className="detail__pair__key">Address:</span>
          <span className="detail__pair__value">{`${getAddress(userData?.address) || "Loading"}`}</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
