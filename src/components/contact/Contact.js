import React from 'react'
import './style.css'
/**
* @author
* @function Contact
**/

const Contact = (props) => {
  return(
    <div className="contactBody">
    <h1 className="contactHeading">Contact Us</h1>
    <p className="contactBody"> Having problems in receiving our services? Leave us a message here...</p>
    <div class="container">
      <form>
        <label for="fname" className="contactLabel">Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>
    
        <label for="email" className="contactLabel">Email</label>
        <input type="text" id="email" name="email" placeholder="Your email.."></input>
    
        <label for="country" className="contactLabel">State</label>
        <select id="country" name="country">
          <option value="australia">Tamil Nadu</option>
          <option value="canada">Bihar</option>
          <option value="usa">Rajasthan</option>
        </select>
    
        <label for="subject" className="contactLabel">Subject</label>
        <textarea id="subject" name="subject" placeholder="What's your query?" rows="6"></textarea>
    
        <input type="submit" value="Submit"></input>
      </form>
    </div>
    </div>
    
   )

 }

export default Contact