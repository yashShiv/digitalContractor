import React from 'react'
import { NavLink } from 'react-router-dom'
import "./style.css"

/**
* @author
* @function ServiceList
**/

const ServiceList = ({list}) => {


  return(
    <div className="list_main">
        <h1 style={{textAlign:"center", marginBottom:"30px"}}>Services</h1>

        
          {(list.map((item)=>{
            return(
              <div className="list_card">
                <div className="list_img">
                  <img alt="profile" width="200" height="150" src=""></img>
                </div>
                <div className="list_card_column">
                  <h3 className="list_data">Name: {item.name.firstname} {item.name.lastname}</h3>
                  <h3 className="list_data">Charges: {`Rs\. ${item.rate} per ${item.unit}`}</h3>
                </div>
                <div className="list_card_column">
                  <h3 className="list_data">{item.service}</h3>
                  <h3 className="list_data">Location: {item.address.city}</h3>
                  <NavLink className="list_button" to={`/viewprofile/${item._id}`}>Know More</NavLink>
                </div>

              </div>
            )
          }))}
          
    </div>
    
   )

}

export default ServiceList