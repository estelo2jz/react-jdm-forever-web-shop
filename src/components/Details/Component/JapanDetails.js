import React, { useContext, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import {JapanDataContext} from '../../Data/Japan/JapanInventory';
import DetailsThumb from '../../DetailsThumb';
import JapanContacts from './DetailsContacts/JapanContacts';

import { Link } from 'react-router-dom'

// import './styles/JapanDetails.scss';
import HeaderInventory from '../../Home/HeaderInventory';

export default function JapanDetails() {
  const { id } = useParams();
  const value = useContext(JapanDataContext)
  const [products] = value.products

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
                <h3>{product.price}</h3>
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
            </div>
            <JapanContacts />
            <HeaderInventory />
          </div>
        ))
      }
    </>
  )
}