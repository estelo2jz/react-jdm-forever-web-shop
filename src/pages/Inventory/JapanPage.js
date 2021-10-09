import React from 'react';
import Products from '../../components/Products';
import Current from '../../components/Product/Current';
import HeaderInventory from '../../components/Home/HeaderInventory';
import JapanData from '../../components/Data/Japan/JapanData';

const JapanPage = () => {
  return (
    <div>
      <Current heading="JAPAN INVENTORY"  />
      <Products />
      <HeaderInventory />

    </div>
  )
}

export default JapanPage
