import React from 'react';
import Products from '../../components/Products';
import Current from '../../components/Product/Current';
import HeaderInventory from '../../components/Home/HeaderInventory';
import FutureData from '../../components/Data/Future/FutureData';


const FuturePage = () => {
  return (
    <div>
      <Current heading="FUTURE INVENTORY" />
      <FutureData />
      <HeaderInventory />

    </div>
  )
}

export default FuturePage
