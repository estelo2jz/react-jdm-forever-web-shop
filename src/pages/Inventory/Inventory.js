import React from 'react';
import Products from '../../components/Products';
import Current from '../../components/Product/Current';
import HeaderInventory from '../../components/Home/HeaderInventory';
import CurrentData from '../../components/Data/Current/CurrentData';

import CurrentPage from '../../pages/Inventory/CurrentPage';

const Inventory = () => {
  return (
    <div>
      <Current heading="CURRENT INVENTORY" />
      <Products />
      <HeaderInventory />
    </div>
  )
}

export default Inventory
