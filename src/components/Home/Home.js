import React from 'react';
import TopHeader from './TopHeader.js';
import FeaturedInventory from '../Features/FeaturedInventory'
import Product from '../Products';
import LearnMore from './LearnMore';
import LearnMoreHeader from './LearnMoreHeader';
import LocationHeader from './LocationHeader';

import Bg from '../../assets/images/home/wallpaper1.jpg'

import './Home.sass';

const Home = () => {
  return (
    <div className="home__container">
      <TopHeader />
      <FeaturedInventory />
      <Product />
      <LearnMore cover={Bg} />
      <LearnMoreHeader />
      <LocationHeader />
    </div>
  )
}

export default Home
