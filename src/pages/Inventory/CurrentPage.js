import React from 'react';
import Products from '../../components/Products';
import Current from '../../components/Product/Current';
import HeaderInventory from '../../components/Home/HeaderInventory';

const CurrentPage = () => {
  return (
    <div>
      <Current heading="CURRENT INVENTORY" />
      <HeaderInventory />

      <Products />
    </div>
  )
}

export default CurrentPage
