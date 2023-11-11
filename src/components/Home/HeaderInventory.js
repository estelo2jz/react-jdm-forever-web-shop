import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderInventory.sass';

const HeaderInventory = () => {
  return (
    <div>
      <div className="top-header__link-container">
        <Link className="top-header__link" to="/inventory/">
          <p className="top-header__link-main">VIEW ALL INVENTORY</p>
        </Link>
      </div>
    </div>
  )
}

export default HeaderInventory
