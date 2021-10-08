import React from 'react';
import Products from '../../components/Products';
import Current from '../../components/Product/Current';

const FuturePage = () => {
  return (
    <div>
      <Current heading="FUTURE INVENTORY" />
      <Products />
    </div>
  )
}

export default FuturePage
