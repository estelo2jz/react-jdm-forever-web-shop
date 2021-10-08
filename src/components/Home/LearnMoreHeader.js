import React from 'react'
import { Link } from 'react-router-dom'

import './styles/LearnMoreHeader.scss';

const CustomHeader = () => {
  return (
    <div className="custom-header__container">
      <div className="custom-header__container-top">
        <div className="custom-header__container-left">
          <p>STRAIGHT FROM JAPAN</p>
        </div>
        <div className="custom-header__container-right">
          <p>LEARN MORE</p>
        </div>
      </div>
      <div className="custom-header__bio">
        <p>
          JDM Lover International Vehicle Importers sells JDM imported and specialty vehicles from all over the world at our dealership in California. JDM Lover also provides the most informed and reliable importing service of Japanese JDM import cars, or other foreign automobiles over 25 years old, Show or Display, and race cars to the USA. In addition to importation, we can bring direct import vehicles into California Air Resources Board (CARB) requirements.
        </p>
        <p>
          Japanese cars for sale from the R32, R33,  R34 Skyline to the Chaser JZX100, which are legal to import to the USA when 25 years old. We can buy and store vehicles in Japan, find them at JDM auctions, or at dealerships in Japan, the UK, Germany, Australia or other countries.  JDM Lover Importers ensure you won't have to worry about side-stepped regulations, improper paperwork, or unnecessary risks -- we will only assist in the import of vehicles that have been deemed legal for road use in the USA, or exempt from requirements.
        </p>
      </div>
    </div>
  )
}

export default CustomHeader
