import React from 'react';
import './style.css';

const ServiceProfile = (props) => {
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
                <span className="flash__info__field flash__info__field--name">{data.name}</span>
                <span className="flash__info__field flash__info__field--profession">{data.serviceType}</span>
                </div>
            </div>
            <div className="detail">
                <h2>Details</h2>
                <div className="detail__pair">
                    <span className="detail__pair__key">Mobile Number:</span>
                    <span className="detail__pair__value">data.mobile_number</span>
                </div>
                <div className="detail__pair">
                    <span className="detail__pair__key">Address:</span>
                    <span className="detail__pair__value">{getAddress(data.address)}</span>
                </div>
                <div className="detail__pair">
                    <span className="detail__pair__key">Experience:</span>
                    <span className="detail__pair__value">{data.experience + " Years"}</span>
                </div>
                <div className="detail__pair">
                    <span className="detail__pair__key">Charge:</span>
                    <span className="detail__pair__value">`${data.rate} ${data.unit}`</span>
                </div>
            </div>
            {/* <div className="gallery">
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
            </div> */}
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
        </div>
    );
}

export default ServiceProfile;  