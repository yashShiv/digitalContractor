import React from "react";
import profile_img from "../../carpenter-temp.jpeg";
import asset_img from "../../gallery/img1.jpg";
import "../profile/style.css";
import DummyServices from "../../data/dummyservices";
import { useParams } from "react-router";

const VProfile = () => {
  const {userID} = useParams([]);
  const [user, setUser] = React.useState(DummyServices.filter((item)=>{
    return item.id==userID;
  }
  ));
  const name = "Yashaswi Shivank";
  const profession = "Carpenter";
  const joined = "Jan 4th 2022";
  const experience = 2;
  const scale = "year";
  function onclicking(){
    console.log(user);
    console.log(userID);
  }
  return (
    <>
    {(user.map(item=>{
      return(
        <div className="frame">
      <div className="flash">
        <div className="flash__img">
          <img src={profile_img} alt="" width="320px" height="240px" />
        </div>
        <div className="flash__info">
          <span className="flash__info__field flash__info__field--name">{item.name}</span>
          <span className="flash__info__field flash__info__field--profession">{item.serviceType}</span>
          <span className="flash__info__field">Joined {`${joined}`}</span>
          <span className="flash__info__field">
            For {`${experience}`} {item.charges}
          </span>
        </div>
      </div>
      <div className="detail">
        <h2>Details</h2>
        <div className="detail__pair">
          <span className="detail__pair__key">Mobile Number:</span>
          <span className="detail__pair__value">(+91)9123487654</span>
        </div>
        <div className="detail__pair">
          <span className="detail__pair__key">Experience:</span>
          <span className="detail__pair__value">20 years</span>
        </div>
        <div className="detail__pair">
          <span className="detail__pair__key">Charge:</span>
          <span className="detail__pair__value">Rs. 20/ sq. ft.</span>
        </div>
      </div>
      <div className="gallery">
        <h2>Gallery</h2>
        <div className="gallery__carousel">
          <div className="gallery__carousel__img">
            <img src={asset_img} alt="" width="320px" height="240px" />
          </div>
          <div className="gallery__carousel__img">
            <img src={asset_img} alt="" width="320px" height="240px" />
          </div>
          <div className="gallery__carousel__img">
            <img src={asset_img} alt="" width="320px" height="240px" />
          </div>
          <div className="gallery__carousel__img">
            <img src={asset_img} alt="" width="320px" height="240px" />
          </div>
          <div className="gallery__carousel__img">
            <img src={asset_img} alt="" width="320px" height="240px" />
          </div>
          <div className="gallery__carousel__img">
            <img src={asset_img} alt="" width="320px" height="240px" />
          </div>
        </div>
      </div>
      <div className="reviews">
        <h2>Reviews</h2>
        <div className="userreview">
          <div className="user">
            <span className="username">Abhisar Shukla</span><span className="ratings">⭐⭐⭐⭐</span>
          </div>
          <div className="review">
            <p>This guy is genius, an expert in carpentry. Just ask him anything and he will make it.</p>
          </div>
        </div>
      </div>
      <button onClick={onclicking}>Click</button>
    </div>
      )
    }))}
    </>
  );
};

export default VProfile;
