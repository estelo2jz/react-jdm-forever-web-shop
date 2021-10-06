import React, { useContext } from 'react'
import { DataContext } from './DataProvider'
import { Link } from 'react-router-dom'

import './Product/Products.scss';

export default function Products() {
  const value = useContext(DataContext)
  const [products] = value.products
  const addCart = value.addCart

  return (
    <div className="products">
      {
        products.map(product => (
          <div className="card" key={product._id}>
            <Link to={`/products/${product._id}`}>
              <img src={product.images[0]} alt="" />
            </Link>
            <div className="box-container">
              <div className="box-product">
                <div className="box-product-name">
                  <h3 className="box-product-year" year={product.year}>
                    <Link to={`/products/${product._id}`}>{product.year}</Link>
                  </h3>
                  <h3 className="box-product-make" make={product.make}>
                    <Link to={`/products/${product._id}`}>{product.make}</Link>
                  </h3>
                </div>
                <h3 className="box-product-model" model={product.model}>
                  <Link to={`/products/${product._id}`} className="box-product-model-name">{product.model}</Link>
                </h3>
              </div>
              <div className="box-price">
                <p>OFFERED AT:</p>
                <h4>${product.price}</h4>
              </div>
              {/* <button onClick={() => addCart(product._id)}>
                Add to cart
              </button> */}
            </div>
          </div>
        ))
      }
    </div>
  )
}