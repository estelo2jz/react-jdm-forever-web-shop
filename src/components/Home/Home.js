import React from 'react';
import TopHeader from './TopHeader.js';
import FeaturedInventory from '../Features/FeaturedInventory'
import Product from '../Products';

import './Home.scss';

const Home = () => {
  return (
    <div className="home__container">
      <TopHeader />
      <FeaturedInventory />
      <Product />
      {/* <div className="home__img-container">
      </div> */}
    </div>
  )
}

export default Home
