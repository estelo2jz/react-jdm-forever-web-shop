import React from 'react';
import TopHeader from './TopHeader.js';
import FeaturedInventory from '../Features/FeaturedInventory'
import Product from '../Products';
import LearnMore from './LearnMore';
import CuxtomHeader from './CustomHeader';

import Bg from '../../assets/images/home/wallpaper1.jpg'

import './Home.scss';

const Home = () => {
  return (
    <div className="home__container">
      <TopHeader />
      <FeaturedInventory />
      <Product />
      <LearnMore cover={Bg} />
      <CuxtomHeader />
    </div>
  )
}

export default Home
