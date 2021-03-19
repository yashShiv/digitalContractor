import React from 'react'
import './style.css'
/**
* @author
* @function Contact
**/

const Contact = (props) => {
  return(
    <div className="contactBody">
    <h3>Contact Form</h3>

    <div class="container">
      <form action="/action_page.php">
        <label for="fname" className="contactLabel">Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>
    
        <label for="email">Email</label>
        <input type="text" id="email" name="email" placeholder="Your email.."></input>
    
        <label for="country">State</label>
        <select id="country" name="country">
          <option value="australia">Tamil Nadu</option>
          <option value="canada">Bihar</option>
          <option value="usa">Rajasthan</option>
        </select>
    
        <label for="subject">Subject</label>
        <textarea id="subject" name="subject" placeholder="What's your query?" ></textarea>
    
        <input type="submit" value="Submit"></input>
      </form>
    </div>
    </div>
    
   )

 }

export default Contact