import React from 'react';
import {Link} from 'react-router-dom';
import './TopHeader.scss';

import HomeBG1 from '../../assets/images/home/1.jpg';

const TopHeader = () => {
  return (
    <div className="top-header">
      <div className="top-header__container">
        {/* <img arc="https://i.redd.it/7194qwwf8ra31.jpg" alt="" /> */}
        <div className="top-header__bg1"></div>
        <div className="top-header__bg2"></div>
        <div className="top-header__bg3"></div>
      </div>
      <div className="top-header__link-container">
        <Link className="top-header__link" to="/inventory/">
          <p className="top-header__link-main">VIEW ALL INVENTORY</p>
        </Link>
      </div>
    </div>
  )
}

export default TopHeader
