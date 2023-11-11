import React, { useContext } from 'react'
import { JapanDataContext } from './JapanInventory';
import { Link } from 'react-router-dom'

import './styles/JapanData.sass';

export default function CurrentData() {
  const value = useContext(JapanDataContext)
  const [products] = value.products
  const addCart = value.addCart

  return (
    <div>
      {/* <Current /> */}
      <div className="products">
        {
          products.map(product => (
            <div className="card" key={product._id}>
              <Link to={`/inventory/japan/${product._id}`}>
                <img src={product.images[0]} alt="" />
              </Link>
              <div className="box-container">
                <div className="box-product">
                  <div className="box-product-name">
                    <h3 className="box-product-year" year={product.year}>
                      <Link to={`/inventory/japan/${product._id}`} className="box-product-year-name">{product.year}</Link>
                    </h3>
                    <h3 className="box-product-make" make={product.make}>
                      <Link to={`/inventory/japan/${product._id}`} className="box-product-make-name">{product.make}</Link>
                    </h3>
                  </div>
                  <h3 className="box-product-model" model={product.model}>
                    <Link to={`/inventory/japan${product._id}`} className="box-product-model-name">{product.model}</Link>
                  </h3>
                </div>
                <div className="box-price">
                  <p>OFFERED AT:</p>
                  <h4>${product.price}</h4>
                </div>
              </div>
            </div>
          ))
        }
      </div>

    </div>
  )
}