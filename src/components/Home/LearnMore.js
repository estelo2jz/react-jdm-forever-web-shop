import React from 'react';
import Bg from '../../assets/images/home/wallpaper1.jpg'

import './styles/LearnMore.sass';

const LearnMore = ({cover}) => {
  return (
    <div className="learn-more">
      <div className="learn-more__container">
        <img src={cover} alt="" />
      </div>
    </div>
  )
}

export default LearnMore
