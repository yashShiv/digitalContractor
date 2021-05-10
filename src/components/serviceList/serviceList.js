import React from 'react'
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
                  <img alt="profile" width="200" height="150" src={item.image}></img>
                </div>
                <div className="list_card_column">
                  <h3 className="list_data">Name: {item.name}</h3>
                  <h3 className="list_data">Charges: {item.charges}</h3>
                </div>
                <div className="list_card_column">
                  <h3 className="list_data">{item.serviceType}</h3>
                  <h3 className="list_data">Location: {item.location}</h3>
                  <button className="list_button">Know More</button>
                </div>

              </div>
            )
          }))}
          
    </div>
    
   )

}

export default ServiceList