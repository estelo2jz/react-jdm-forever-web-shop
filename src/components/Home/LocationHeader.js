import React from 'react'
import { Link } from 'react-router-dom'

import { BsFillTelephoneFill } from 'react-icons/bs';
import MAP from '../../assets/images/home/map3.jpg'
import JDMLOGO from '../../assets/images/home/jdmlover.png'


import './styles/LocationHeader.scss';

const LocationHeader = () => {
  return (
    <div className="location-header__container">
      <div className="location-header__container-top">
        <div className="location-header__container-left">
          <p>LOCATION</p>
        </div>
        <div className="location-header__container-right">
          {/* <p>LEARN MORE</p> */}
        </div>
      </div>
      <div className="location-header__map-container">
        <div className="location-header__map-map">
          <p>Location</p>
          <div className="location-header__map-map-container">
            <img src={MAP} alt="" />
          </div>
        </div>
        <div className="location-header__address-container">
          <div className="location-header__address-logo">
            <div className="location-header__address-logo-bg">
              <img src={JDMLOGO} alt="" />
            </div>
          </div>
          <div className="location-header__address-section">
            <div className="location-header__address-address">
              <p>5595 CORPORATE AVE,</p>
              <p>CYPRESS, CA 90630</p>
            </div>
            <div className="location-header__address-hours">
              <p>
                <span>MONDAY-FRIDAY</span>
                <span>10am to 8pm</span>
                <span>(Appointment Only)</span>
              </p>
              <p>
                <span>Saturday and Sunday</span>
                <span>10am to 8pm</span>
                <span>(Appointment Only)</span>
              </p>
              <p>
                <i><BsFillTelephoneFill />
                  <span>844-523-2233</span>
                </i>
              </p>
            </div>
          </div>
          {/* <div className="location-header__address-phone">

          </div> */}
        </div>
      </div>
    </div>
  )
}

export default LocationHeader
