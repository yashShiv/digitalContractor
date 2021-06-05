import React from 'react'
import "./style.css"
import DummyServices from '../../data/dummyservices';
import ServiceList from '../serviceList/serviceList';
import axios from 'axios';

/**
* @author
* @function Filter
**/

const Filter = () => {
    const [list, setList] = React.useState([]);
    
    const [newList, setnewList] = React.useState([]);
    React.useEffect(() => {
        console.log(list);
        fetch('/api/all', {
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            },
          }).then(res=>res.json())
          .then(data => {
            console.log(data.data[0].name.firstname);
            console.log(data.data);
            console.log(DummyServices);
            setList(data.data);
            setnewList(data.data);
            console.log(list)

            // console.log(list[0]);
          });
      }, []);

    function applyFilter(){

        const loc = document.getElementById("filter_location").value;
        const service=document.getElementById("filter_service").value;
        console.log(list)
        setList(list.filter((item)=>{
            if(service!=="" && loc!==""){
                return item.service===service && item.address.city===loc;
            }
            else{
                if(service!=="" && loc===""){
                    return item.service===service;
                }
    
                else if(loc!==""){
                    return item.address.city===loc;
                }
                else{
                    return item
                }
            }
            
            
            
        }))
        console.log(list);
        console.log(loc);
    }

    function restoreFilter(){
        console.log(newList)
        setList(newList)
        console.log(list)
    }

  return(
    <div className="services_main">
        <div className="services_filter">
        <h1>Filter</h1>
        <hr style={{marginBottom:"15px"}}></hr>
        <label for="filter_location">Location</label>
        <input list="filter_locations" className="filter_input" id="filter_location" type="text" placeholder="Enter location" />
        <datalist id="filter_locations">
            <option value="Delhi"/>
            <option value="Mumbai"/>
            <option value="Chennai"/>
            <option value="Bhilwara"/>
            <option value="Varanasi"/>
        </datalist>
        <label for="filter_service">Service Type</label>
        <input list="filter_services" className="filter_input" id="filter_service" type="text" placeholder="Type of Service" />
        <datalist id="filter_services">
            <option value="Carpenter"/>
            <option value="Painting"/>
            <option value="Flooring"/>
            <option value="Construction"/>
            <option value="Plumbing"/>
            <option value="Electrician"/>
        </datalist>
        <div style={{textAlign:"center"}}>
            <button className="filter_button" onClick={applyFilter}>Apply</button>
            <button className="filter_button" onClick={restoreFilter}>Restore</button>
        </div>
    </div>
    <div className="services_list">
        <ServiceList list={list}/>
    </div>
        
    </div>
        )
}

export default Filter