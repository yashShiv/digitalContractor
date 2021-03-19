import React from "react";
import profile_img from "../../carpenter-temp.jpeg";
import "./style.css";

const Profile = () => {
  const name = "Yashaswi Shivank";
  const profession = "Carpenter";
  const joined = "Jan 4th 2022";
  const experience = 2;
  const scale = "year";

  return (
    <div className="frame">
      <div className="flash">
        <div className="flash__img">
          <img src={profile_img} alt="" width="320px" height="240px" />
        </div>
        <div className="flash__info">
          <span className="flash__info__field flash__info__field--name">{`${name}`}</span>
          <span className="flash__info__field flash__info__field--profession">{`${profession}`}</span>
          <span className="flash__info__field">Joined {`${joined}`}</span>
          <span className="flash__info__field">
            For {`${experience}`} {`${scale}`}
          </span>
        </div>
      </div>
      <div className="detail">
        <h2>Details</h2>
        <div className="detail__pair">
          <span className="detail__pair__key">Mobile Number: </span>
          <span className="detail__pair__value">(+91)9123487654</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
