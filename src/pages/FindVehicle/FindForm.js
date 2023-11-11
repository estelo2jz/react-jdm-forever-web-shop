import React from 'react';

import './FindForm.sass';

const FindForm = () => {
  return (
    <div className="find-form">
      <div className="find-form__heading">
        <p>Vehicle Details</p>
      </div>
      <form className="form-group">
        <div className="find-form__vehicle-details">
          <div className="find-form__vehicle-50-input">
            <input type="text" placeholder="Year Max" />
            <input type="text" placeholder="Year Min" />
          </div>
          <div className="find-form__vehicle-dropdown">
            <div className="find-form__input-dropdown">
              {/* <label for="cars">Select Make</label> */}
              <select name="cars" id="cars">
                <option value="">Select Make</option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
                <input type="submit" value="Submit" />
              </select>
            </div>
            <div className="find-form__input-dropdown">
              {/* <label for="cars">Select Model</label> */}
              <select name="cars" id="cars">
                <option value="">Select Model</option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
                <input type="submit" value="Submit" />
              </select>
            </div>
          </div>
          <div className="find-form__vehicle-50-input">
            <input type="text" placeholder="Price Min" />
            <input type="text" placeholder="Price Maxx" />
          </div>
          <div className="find-form__vihecle-100-input">
            <input type="text" placeholder="Color" />
            <input type="text" placeholder="Body Style" />
            <input type="text" placeholder="Engine" />
          </div>
          <div className="find-form__vehicle-dropdown">
            <div className="find-form__input-dropdown">
              {/* <label for="cars">Transmission Type</label> */}
              <select name="cars" id="cars">
                <option value="">Transmission Type</option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
                <input type="submit" value="Submit" />
              </select>
            </div>
          </div>
          <div className="find-form__vehicle-message">
            <textarea name="message" id="message" placeholder="Notes" />
          </div>
        </div>
        <div className="find-form__contact-details">
          <div className="find-form__heading">
            <p>Contact Details</p>
          </div>
          <div className="find-form__contact-input">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="text" placeholder="Phone Number" />
            <input type="text" placeholder="Email Address" />
          </div>
          <div className="find-form__contact-dropdown">
            <div className="find-form__input-dropdown">
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
            <div className="find-form__input-dropdown">
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
          <div className="find-form__contact-comments">
            <p>Comments</p>
            <textarea name="message" id="message" placeholder="Notes" />
          </div>
          <div className="find-form__contact-btn">
            <div>
              <p>SEND</p>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default FindForm
