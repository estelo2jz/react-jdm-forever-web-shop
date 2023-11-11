import React from 'react';

import './FAQ.sass';

const FAQ = () => {
  return (
    <div className="faq">
      <div className="faq__img">
        <img src="http://dealeraccelerate-all.s3.amazonaws.com/international/marketing_assets/8/banner3.jpg" alt="" />
      </div>
      <div className="faq__heading">
        <h5>FREQUENTLY ASKED QUESTIONS</h5>
      </div>
      <div className="faq__terms">
        <div className="faq__terms-container">
          <div className="faq__temrs-heading">
            <h4>TERMS</h4>
          </div>
          <div className="faq__box">
            <div className="faq__box-items">
              <span>CARD</span>
              <span>(California Air Resources Board) if you are in California</span>
            </div>
            <div className="faq__box-items">
              <span>CBP</span>
              <span>(US Customs and Border Protection)</span>
            </div>
            <div className="faq__box-items">
              <span>DHS</span>
              <span>(Department of Homeland Security)</span>
            </div>
            <div className="faq__box-items">
              <span>EPA</span>
              <span>(Environmental Protection Agency)</span>
            </div>
            <div className="faq__box-items">
              <span>DMV</span>
              <span>(Local Department of Motor Vehicles)</span>
            </div>
            <div className="faq__box-items">
              <span>DOT</span>
              <span>(Department of Transportation)</span>
            </div>
            <div className="faq__box-items">
              <span>NHTSA</span>
              <span>(National Highway Traffic Safety Administration part of the DOT)</span>
            </div>
          </div>
        </div>
      </div>
      <div className="faq__bio-1">
        <h4>
          25 YEAR NHTSA EXEMPTION
        </h4>
        <p>
          A motor vehicle that is at least 25 years old can be lawfully imported into the U.S. without regard to whether it complies with all applicable FMVSS. Such a vehicle would be entered under Box 1 on the HS-7 Declaration form to be given to Customs at the time of importation. You should note that the 25 year period runs from the date of the vehicle's manufacture. If the date of manufacture is not identified on a label permanently affixed to the vehicle by its original manufacturer, to establish the age of the vehicle, you should have documentation available such as an invoice showing the date the vehicle was first sold or a registration document showing that the vehicle was registered at least 25 years ago. Absent such information, a statement from a recognized vehicle historical society identifying the age of the vehicle could be used. 
          <span>http://www.importavehicle.info/2011/01/hs7-form-importation-of-motor-vehicles.html</span>
        </p>
      </div>
      <div className="faq__bio-2">
        <h4>
          21 YEAR EPA EXEMPTION IN ORIGINAL CONFIGURATION
        </h4>
        <p>
          If the vehicle is at least 21 years old, there are no EPA compliance requirements upon importation. The age of the vehicle is determined by subtracting the calendar year of manufacture from the calendar year of importation. If the calendar year of manufacture is unavailable, the importer may substitute the model year or year of first registration. For instance, to qualify in 2001, the vehicle must have been manufactured in 1980 or earlier. The vehicle must be in its original unmodified configuration. Vehicles at least 21 years old with replacement engines are not eligible for this exemption unless they contain equivalent or newer EPA certified engines.
        </p>
        <p>
          No approval or Customs bond is required by EPA. The importer must also prove to Customs, as required, that the vehicle or engine was manufactured prior to EPA regulation. Documents such as a title, or letter from the original manufacturer may be used for this purpose.The importer must file with Customs, upon entry, an EPA Form 3520-1 and declare code E on that form.
        </p>
        <span>
          http://www.importavehicle.info/2014/04/21-year-old-epa-exempt-vehicles-3520-1.html
        </span>
      </div>
    </div>
  )
}

export default FAQ
