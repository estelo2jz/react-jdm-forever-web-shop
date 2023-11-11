import React from "react";

import ContactForm from './ContactForm';

import FindV from "../../assets/images/findVehicle/bg1.jpg";
import MAP from "../../assets/images/home/map3.jpg";

import "./Contact.sass";

const FindVehicle = () => {
  return (
    <div className="contact">
      <div className="contact__right">
        <div className="contact__left-bg">
          <img src={FindV} alt="" />
        </div>
        <div className="contact__left-container">
          <div className="contact__left-desc">
            <h3>CONTACT US</h3>
          </div>
          <div className="contact__left-desc">
            <p className="contact__left-">
              If you have any questions please submit them below and one of our dealership representatives will contact you shortly.
            </p>
          </div>
          <div className="contact__left-desc">
            <p className="contact__left-">
              Due to COVID-19 by Appointment only.
            </p>
          </div>
          <div className="contact__left-desc">
            <p className="contact__left-desc-child">
              MONDAY-FRIDAY
            </p>
            <p>
              10am to 7pm (Appointment only)
            </p>
          </div>
          <div className="contact__left-desc">
            <p className="contact__left-desc-child">
              SATURDAY AND SUNDAY
            </p>
            <p>
              (Appointment only)
            </p>
          </div>
          <div className="contact__left-desc">
            <p className="contact__left-">
              5595 Corporate Ave Cypress, California 90630  Please contact us before visting.
            </p>
          </div>
          <div className="contact__left-desc">
            <p className="contact__left-number">
              844-523-2233
            </p>
          </div>
        </div>
        <div className="contact__left-bg">
          <img src={MAP} alt="" />
        </div>
      </div>
      <div className="contact__right">
        <div className="contact__right-container">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default FindVehicle;
