import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineRight } from 'react-icons/ai';
import { ImInstagram, ImYoutube2, ImRocket, ImLocation } from 'react-icons/im';
import { BsFillTelephoneFill } from 'react-icons/bs';

import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__newsletter">
        <div className="footer__newsletter-left">
          <p>WEEKLY INVETORY UPATES MORE</p>
          <h1>NEWSLETTER</h1>
        </div>
        <div className="footer__newsletter-email">
          <form>
            <input type="text" placeholder="ENTER EMAIL" />
            <button type="submit">
              <p>SIGN UP</p>
              <AiOutlineRight />
            </button>
          </form>
        </div>
        <div className="footer__newsletter-social">
          <p>
            <FaFacebookF />
          </p>
          <p>
            <ImInstagram />
          </p>
          <p>
            <ImYoutube2 />
          </p>
        </div>
      </div>
      <div className="footer__links">
        <div className="footer__logo">
          <img src="https://www.importavehicle.com/assets/international_toprank/top-rank-logo-footer-21fb6b5bedb1958ae36b703a58c2f6bc.svg" alt="logo" />
        </div>
        <div className="footer__location">
          <div className="footer__location-location">
            <div className="footer__location-logo"><ImLocation /></div>
            <div className="footer__location-address">5595 CORPORATE AVE, CYPRESS, CA 90630</div>
          </div>
          <div className="footer__location-number">
            <div className="footer__location-logo"><BsFillTelephoneFill /></div>
            <div className="footer__location-phone">847-523-2233</div>
          </div>
        </div>
        <div className="footer__link">
          <Link className="footer__tag" to="#">
            Home
          </Link>
          <Link className="footer__tag" to="#">
            INVENTORY
          </Link>
          <Link className="footer__tag" to="#">
            FIND YOUR VEHICLE
          </Link>
          <Link className="footer__tag" to="#">
            TITLE/REGISTRATION
          </Link>
          <Link className="footer__tag" to="#">
            SERVICE
          </Link>
          <Link className="footer__tag" to="#">
            CALIFORNIA BUYER
          </Link>
          <Link className="footer__tag" to="#">
            FAQ | INFO
          </Link>
          <Link className="footer__tag" to="#">
            CONTACT
          </Link>
        </div>
      </div>

      <div className="footer__bottom-footer">
        <p>
          POWERED BY
        </p>
        <p>
          <a href="https://estelo.net/" target="_blank">
          <ImRocket />
          </a>
        </p>
        <p>
          EBUILD
        </p>
      </div>
    </div>
  )
}

export default Footer