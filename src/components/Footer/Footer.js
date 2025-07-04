import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { ImInstagram, ImYoutube2, ImRocket, ImLocation } from "react-icons/im";
import { BsFillTelephoneFill } from "react-icons/bs";

import JDMLOVER from "../../assets/images/home/jdmlover.png";
import pcevolvers from "../../assets/jdmspark.png"
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer__newsletter">
        <div className="footer__newsletter-left">
          <p>WEEKLY INVENTORY UPDATES AND MORE</p>
          <h1>NEWSLETTER</h1>
        </div>
        <form className="footer__newsletter-form">
          <input type="email" placeholder="ENTER EMAIL" />
          <button type="submit">SIGN UP</button>
        </form>
        <div className="footer__newsletter-social">
          <a href="https://www.facebook.com/toprankimporters" target="_blank" rel="noreferrer"><FaFacebookF /></a>
          <a href="https://www.instagram.com/toprankimporters/" target="_blank" rel="noreferrer"><ImInstagram /></a>
          <a href="https://www.youtube.com/c/ToprankImporters" target="_blank" rel="noreferrer"><ImYoutube2 /></a>
        </div>
      </section>

      <section className="footer__main">
        <div className="footer__logo">
          <Link to="/">
            <img src={pcevolvers} alt="JDM Lover Logo" />
          </Link>
        </div>

        <div className="footer__location">
          <div className="footer__location-item">
            <ImLocation />
            <span>5595 CORPORATE AVE, CYPRESS, CA 90630</span>
          </div>
          <div className="footer__location-item">
            <BsFillTelephoneFill />
            <span>847-523-2233</span>
          </div>
        </div>

        <nav className="footer__nav">
          {[
            { label: "Home", path: "/" },
            { label: "Inventory", path: "/inventory" },
            { label: "Find Your Vehicle", path: "/car-finder" },
            { label: "Title/Registration", path: "/title-registration" },
            { label: "Service", path: "/service" },
            { label: "California Buyer", path: "/california-buyer" },
            { label: "FAQ | Info", path: "/faq-and-info" },
            { label: "Contact", path: "/contact" }
          ].map(({ label, path }, index) => (
            <Link key={index} to={path} className="footer__nav-link">
              {label}
            </Link>
          ))}
        </nav>

      </section>

      <div className="footer__bottom">
        <p>POWERED BY</p>
        <a href="https://estelo.net/" target="_blank" rel="noreferrer">
          {/* <ImRocket /> */}
        <p>EMA</p>

        </a>
      </div>
    </footer>
  );
};

export default Footer;
