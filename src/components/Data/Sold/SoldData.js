import React, { useContext } from 'react'
import { SoldDataContext } from './SoldInventory';
import { Link } from 'react-router-dom'

import './styles/SoldData.sass';

export default function CurrentData() {
  const value = useContext(SoldDataContext)
  const [products] = value.products
  const addCart = value.addCart

  return (
    <div>
      {/* <Current /> */}
      <div className="sold-data__products">
        {
          products.map(product => (
            <div className="sold-data__card" key={product._id}>
              <div className="sold-data__card-container">
                <Link to={`/inventory/sold/${product._id}`}>
                  <div className="sold-data__box-price">
                    <h4>{product.price}</h4>
                    {/* <h6>{product.coming}</h6> */}
                  </div>
                  <div  className="sold-data__box-img">
                    <img src={product.images[0]} alt="" />
                  </div>
                </Link>
                <div className="sold-data__box-container">
                  <div className="sold-data__box-product">
                    <div className="sold-data__box-product-name">
                      <h3 className="sold-data__box-product-year" year={product.year}>
                        <Link to={`/inventory/sold/${product._id}`} className="sold-data__box-product-year-name">{product.year}</Link>
                      </h3>
                      <h3 className="sold-data__box-product-make" make={product.make}>
                        <Link to={`/inventory/sold/${product._id}`} className="sold-data__box-product-make-name">{product.make}</Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="sold-data__box-product-model" model={product.model}>
                <Link to={`/inventory/sold/${product._id}`} className="sold-data__box-product-model-name">{product.model}</Link>
                </h3>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}