import React from 'react';
import Products from '../../components/Products';
import Current from '../../components/Product/Current';
import HeaderInventory from '../../components/Home/HeaderInventory';

const FuturePage = () => {
  return (
    <div>
      <Current heading="FUTURE INVENTORY" />
      <Products />
      <HeaderInventory />

    </div>
  )
}

export default FuturePage
