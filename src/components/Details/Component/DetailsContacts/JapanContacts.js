import React from 'react';
import { BsFillTelephoneFill } from 'react-icons/bs';

import JapanTab from '../DetailsTabs/JapanTab';


import './styles/main.scss';



const JapanContact = () => {
  return (
    <div className="details-contact__container">
      <div className="details-contact__details">
        <JapanTab />
      </div>
      <div className="details-contact__form">
        <div className="details-contact__form-number">
          <div className="details-contact__logo"><BsFillTelephoneFill /></div>
          <div className="details-contact__number">844-523-2233</div>
        </div>
        <div className="details-contact__form-contents">
          <div className="details-contact__form-header">
            <p className="details-contact__form-email">EMAIL US</p>
            <p className="details-contact__form-contact">CONTACT DETAILS</p>
          </div>
          <form>
            <label>
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
              <input type="text" placeholder="Phone Number" />
              <input type="text" placeholder="Email Address" />
              <input type="text" placeholder="Your State" />
              <input type="text" placeholder="Best Time To Call Me" />
              <p className="details-contact__form-textarea">Comments</p>
              <textarea placeholder="Comments"></textarea>
            </label>
            <div className="details-contact__form-submit">
              <input className="details-contact__form-btn" type="submit" value="SEND" />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default JapanContact
