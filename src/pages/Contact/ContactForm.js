import React from 'react';

import './ContactForm.sass';


const ContactForm = () => {
  return (
    <div className="contact-form">
      <div className="contact-form__contact-details">
        <div className="contact-form__heading">
          <p>Contact Details</p>
        </div>
        <div className="contact-form__contact-input">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="text" placeholder="Phone Number" />
          <input type="text" placeholder="Email Address" />
        </div>
        <div className="contact-form__contact-dropdown">
          <div className="contact-form__input-dropdown">
            {/* <label for="cars">Your State</label> */}
            <select name="cars" id="cars">
              <option value="">Your State</option>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
              <input type="submit" value="Submit" />
            </select>
          </div>
          <div className="contact-form__input-dropdown">
            {/* <label for="cars">Best Time To Call Me</label> */}
            <select name="cars" id="cars">
              <option value="">Best Time To Call Me</option>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
              <input type="submit" value="Submit" />
            </select>
          </div>
        </div>
        <div className="contact-form__contact-comments">
          <p>Comments</p>
          <textarea name="message" id="message" placeholder="Notes" />
        </div>
        <div className="contact-form__contact-btn">
          <div>
            <p>SEND</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
