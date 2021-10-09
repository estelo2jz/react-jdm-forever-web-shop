import React from 'react';
import Products from '../../components/Products';
import Current from '../../components/Product/Current';
import HeaderInventory from '../../components/Home/HeaderInventory';
import CurrentData from '../../components/Data/Current/CurrentData';

const CurrentPage = () => {
  return (
    <div>
      <Current heading="CURRENT INVENTORY" />
      <Products />
      <HeaderInventory />
    </div>
  )
}

export default CurrentPage
