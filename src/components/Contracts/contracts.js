import React from 'react'
import DummyOrders from '../../data/dummyOrders'
import "./style.css"
/**
* @author
* @function Contracts
**/

const Contracts = (props) => {
    const [orders, setOrders] = React.useState(DummyOrders)

    function declineOffer(x){
        console.log(x);
        console.log("exec");
        setOrders(orders.filter((item)=>{
            return item.id!==x;
        }))
    }
  return(
    <div className="contracts_main">
        
        <h1 className="aboutHeading" style={{marginTop:"40px"}}>Contracts</h1>
        <div className="contracts_row">
            {(orders.map((item)=>{
                return(
                    <div className="contracts_column">
                        <div className="contracts_card">
                        <img src={item.image} alt="profile" className="profile_photo"></img>
                        <hr style={{marginBottom:"10px"}}></hr>
                        <div className="">
                            <h2 className="">{item.name}</h2>
                            <hr style={{marginTop:'5px', marginBottom:'10px'}}></hr>
                            <h2 className="card_details">Contact: {item.contact}</h2>
                            <h2 className="card_details">Service: {item.serviceType}</h2>
                            <h2 className="card_details">Location: {item.location}</h2> 
                            <div>
                                <button className="button_accept">Accept</button>
                                <button className="button_decline" onClick={()=>declineOffer(item.id)}>Decline</button>
                            </div>   
                        </div>
                        
                        </div>
                    </div>
                )
            }))}
            
        </div>
    </div>
   )

 }

export default Contracts