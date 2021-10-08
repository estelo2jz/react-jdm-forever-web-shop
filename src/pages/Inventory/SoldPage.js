import React from 'react';
import Products from '../../components/Products';
import Current from '../../components/Product/Current';
import HeaderInventory from '../../components/Home/HeaderInventory';

const SoldPage = () => {
  return (
    <div>
      <Current heading="RECENTLY SOLD" />
      <Products />
      <HeaderInventory />

    </div>
  )
}

export default SoldPage
