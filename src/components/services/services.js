import React from 'react'
import Filter from '../filter/filter'
import ServiceList from '../serviceList/serviceList'
import "./style.css"

/**
* @author
* @function Services
**/

const Services = (props) => {
    
  return(
        <div>
            <div className="services_main">
                <div className="services_filter">
                    <Filter/>
                </div>
                <div className="services_list">
                    <ServiceList/>
                </div>
            </div>
        </div>
   )

 }

export default Services