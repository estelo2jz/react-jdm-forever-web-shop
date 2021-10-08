import React from 'react';
import Products from '../../components/Products';
import Current from '../../components/Product/Current';

const CurrentPage = () => {
  return (
    <div>
      <Current heading="CURRENT INVENTORY" />
      <Products />
    </div>
  )
}

export default CurrentPage
