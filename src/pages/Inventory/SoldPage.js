import React from 'react';
import Products from '../../components/Products';
import Current from '../../components/Product/Current';

const SoldPage = () => {
  return (
    <div>
      <Current heading="RECENTLY SOLD" />
      <Products />
    </div>
  )
}

export default SoldPage
