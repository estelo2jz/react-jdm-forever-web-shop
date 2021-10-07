import React from 'react'
import { Link } from 'react-router-dom'

import BlackLine from '../../assets/images/home/blackline.png'

import './FeaturedInventory.scss';

const FeaturedInventory = () => {
  return (
    <div className="featured-inventory__container">
      <div className="featured-inventory__container-top">
        <div className="featured-inventory__container-left">

        </div>
        <div className="featured-inventory__container-center">
          <p>FEATURED INVENTORY</p>
        </div>
        <div className="featured-inventory__container-right">
          {/* <img src={BlackLine} /> */}
        </div>
      </div>
    </div>
  )
}

export default FeaturedInventory
