import React, {useEffect, useState} from "react";
import profile_img from "../../carpenter-temp.jpeg";
import asset_img from "../../gallery/img1.jpg";
import "./style.css";
import CustomerProfile from './CustomerProfile';
import ServiceProfile from './ServiceProfile';

const Profile = () => {
  const type = localStorage.getItem('type');
  const [user, setUser] = useState(null);
  useEffect(() => {
    const getUserData = async () => {
      if(localStorage.getItem('jwt') != null) {
        if(localStorage.getItem('type') === 'customer') {
            await fetch('/api/c/user', {
                method: "GET",
                headers: {
                    authorization: `Bearer ${localStorage.getItem('jwt')}`
                }
            }).then(response=>response.json())
            .then(data => {
              setUser(data.data);
            })
        } else {
            await fetch('/api/s/user', {
            method: "GET",
            headers: {
              authorization: `Bearer ${localStorage.getItem('jwt')}`
            }
          }).then(response=>response.json())
            .then(data => {
              setUser(data.data);
            })
        }
      }
    }
    getUserData();
  }, [setUser]);

  return (
    user == null
    ?
    <div>Loading...</div>
    :
    type === 'customer'
    ?
    <CustomerProfile data={user}/>
    :
    <ServiceProfile data={user}/>
  );
};

export default Profile;
