import Sticker from "../../assets/images/findVehicle/arb_sticker.jpg";
import './Buyer.scss';
import React from "react";
import "./Buyer.scss";

const Buyer = () => {
  return (
    <section className="buyer">
      <div className="buyer__intro">
        <div className="buyer__img">
          <img
            src="http://dealeraccelerate-all.s3.amazonaws.com/international/marketing_assets/13/banner5.jpg"
            alt="California Skyline"
          />
        </div>
        <div className="buyer__intro-text">
          <h4>CALIFORNIA</h4>
          <p>
            If you're in California and want to legally drive a 25+ year old
            import like a Nissan Skyline GT-R, it's not as simple as in other
            states. Toprank Importers handle California compliance and testing
            so your JDM or foreign vehicle can be legally registered and smog
            compliant.
          </p>
        </div>
      </div>

      <div className="buyer__sticker-container">
        <div className="buyer__sticker">
          <img src={Sticker} alt="Compliance Sticker" />
        </div>
        <div className="buyer__sticker-bio">
          {/* Replace below with parsed Q&A or keep all as paragraphs */}
          <p>
            Prices for California modification and testing range from $7,500 –
            $15,000 depending on the vehicle model and year. R32 and R33 GT-Rs
            typically cost ~$11,000. The vehicle must be near stock and in
            excellent condition. OBD-II cars (1996+) cost significantly more.
          </p>
          <p>
            <span>1967 and older:</span> No testing or modification needed.
          </p>
          <p>
            <span>1968–1974:</span> Strongly discouraged. Requires EPA
            compliance and costly testing with little collectible value.
          </p>
          <p>
            <span>1975–Present:</span> Requires ARB Certificate of Conformance
            via laboratory testing.
          </p>
          <p>
            <span>Motorcycles and heavy-duty engines:</span> Must comply with
            original manufacturing standards—no retrofitting allowed.
          </p>
          <p>
            <span>Diesel Vehicles:</span> 1979 and older diesels are exempt;
            conversions require lab testing.
          </p>

          <div className="buyer__faq">
            <h5>Common Questions</h5>

            <div>
              <span>1) What cars can I register in California?</span>
              <p>
                Vehicles brought into compliance with ARB standards can be
                registered. More info:{' '}
                <a href="http://www.gtrusablog.com/2015/11/first-california-legal-nissan-skyline.html" target="_blank" rel="noreferrer">
                  Read more
                </a>
              </p>
            </div>

            <div>
              <span>2) What is a direct import vehicle?</span>
              <p>
                A light-duty vehicle not originally intended for U.S. sale and
                lacking EPA or ARB certification.
              </p>
            </div>

            <div>
              <span>3) What vehicles don’t require biennial smog?</span>
              <p>
                Gasoline, hybrid, or alt-fuel vehicles 1975 and older; diesel
                vehicles 1997 and older; electric vehicles; motorcycles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Buyer;


