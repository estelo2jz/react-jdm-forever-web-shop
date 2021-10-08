import React from 'react';
import Products from '../../components/Products';
import Current from '../../components/Product/Current';

const Inventory = () => {
  return (
    <div>
      <Current heading="CURRENT INVENTORY" />
      <Products />
    </div>
  )
}

export default Inventory
