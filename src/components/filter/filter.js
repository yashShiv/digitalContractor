import React from 'react'

/**
* @author
* @function Filter
**/

const Filter = (props) => {
  return(
    <div className="filter_main">
        <h1>Filter</h1>
        <hr style={{marginBottom:"15px"}}></hr>
        <label for="filter_location">Location</label>
        <input list="filter_locations" className="filter_input" id="filter_location" type="text" placeholder="Name" />
        <datalist id="filter_locations">
            <option value="Delhi"/>
            <option value="Mumbai"/>
            <option value="Chennai"/>
            <option value="Lucknow"/>
            <option value="Hyderabad"/>
        </datalist>
        <label for="filter_service">Service Type</label>
        <input list="filter_services" className="filter_input" id="filter_service" type="text" placeholder="Name" />
        <datalist id="filter_services">
            <option value="Carpentry"/>
            <option value="Painting"/>
            <option value="Flooring"/>
            <option value="Construction"/>
            <option value="Plumbing"/>
        </datalist>
    </div>
   )
}

export default Filter