import React from 'react';
import Products from '../../components/Products';
import Current from '../../components/Product/Current';
import HeaderInventory from '../../components/Home/HeaderInventory';
import SoldData from '../../components/Data/Sold/SoldData';

const SoldPage = () => {
  return (
    <div>
      <Current heading="RECENTLY SOLD" />
      <SoldData />
      <HeaderInventory />

    </div>
  )
}

export default SoldPage
