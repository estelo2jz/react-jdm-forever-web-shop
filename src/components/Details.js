import React, { useContext, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { DataContext } from './DataProvider'
import Colors from './Colors'
import Sizes from './Sizes'
import DetailsThumb from './DetailsThumb';
import DetailsContact from './Details/DetailsContact';
import { Link } from 'react-router-dom'

import './Details/Details.scss';

export default function Details() {
  const { id } = useParams();
  const value = useContext(DataContext)
  const [products] = value.products
  const addCart = value.addCart

  const [index, setIndex] = useState(0)
  const imgDiv = useRef();


  const details = products.filter((product, index) => {
    return product._id === id
  })

  const handleMouseMove = e => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = (e.pageX - left) / width * 100
    const y = (e.pageY - top) / height * 100
    imgDiv.current.style.backgroundPosition = `${x}% ${y}%`
  }


  return (
    <>
      {
        details.map(product => (
          <div className="details" key={product._id}>
            <div className="details__header">
              <div className="details-header__fullname">
                <p>{product.fullName}</p>
              </div>
              <div className="details__price">
                <h3>${product.price}</h3>
              </div>
            </div>
            <div className="box-details">
              <div className="box-img">
                <div className="box-img-container" onMouseMove={handleMouseMove}
                  style={{ backgroundImage: `url(${product.images[index]})` }} ref={imgDiv}
                  onMouseLeave={() => imgDiv.current.style.backgroundPosition = `center`}
                />
                <div>
                  <DetailsThumb images={product.images} setIndex={setIndex} />
                </div>
              </div>
              {/* <h2 className="box-details-title" title={product.title}>{product.model}</h2> */}
              {/* <Colors colors={product.colors} />
              <Sizes sizes={product.sizes} /> */}
              <div className="box-specs-container">
                <p className="box-specs-items">
                  <span>YEAR</span>
                  <span>
                    {product.year}
                  </span>
                </p>
                <p className="box-specs-items">
                  <span>MAKE</span>
                  <span>
                    {product.make}
                  </span>
                </p>
                <p className="box-specs-items">
                  <span>MODEL</span>
                  <span>
                    {product.model}
                  </span>
                </p>
                <p className="box-specs-items">
                  <span>BODY COLOR</span>
                  <span>
                    {product.bodyColor}
                  </span>
                </p>
                <p className="box-specs-items">
                  <span>STOCK</span>
                  <span>
                    {product.stockNumber}
                  </span>
                </p>
                <p className="box-specs-items">
                  <span>VIN</span>
                  <span>
                    {product.vin}
                  </span>
                </p>
                <p className="box-specs-items">
                  <span>MILEs</span>
                  <span>
                    {product.miles}
                  </span>
                </p>
                <p className="box-specs-items">
                  <span>ENGINE SIZE</span>
                  <span>
                    {product.engineSize}
                  </span>
                </p>
                <p className="box-specs-items">
                  <span>TRANSMISSION TYPE</span>
                  <span>
                    {product.transmissionType}
                  </span>
                </p>
              </div>
              {/* <DetailsThumb images={product.images} setIndex={setIndex} /> */}
              {/* <Link to="/cart" className="cart" onClick={() => addCart(product._id)}>
                Add to cart
              </Link> */}
            </div>
            <DetailsContact />
          </div>
        ))
      }
    </>
  )
}