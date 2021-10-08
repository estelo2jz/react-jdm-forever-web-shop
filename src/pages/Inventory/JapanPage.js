import React from 'react';
import Products from '../../components/Products';
import Current from '../../components/Product/Current';

const JapanPage = () => {
  return (
    <div>
      <Current heading="JAPAN INVENTORY"  />
      <Products />
    </div>
  )
}

export default JapanPage
