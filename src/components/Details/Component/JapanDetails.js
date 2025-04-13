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
                          <div
                            className="box-img__main"
                            ref={imgDiv}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={() => (imgDiv.current.style.backgroundPosition = 'center')}
                            style={{ backgroundImage: `url(${product.images[index]})` }}
                          />
                          <div className="box-img__thumbs">
                            <DetailsThumb images={product.images} setIndex={setIndex} />
                          </div>
                        </div>
                        <div className="box-specs-container">
                          {[
                            ['YEAR', product.year],
                            ['MAKE', product.make],
                            ['MODEL', product.model],
                            ['BODY COLOR', product.bodyColor],
                            ['STOCK', product.stockNumber],
                            ['VIN', product.vin],
                            ['MILES', product.miles],
                            ['ENGINE SIZE', product.engineSize],
                            ['TRANSMISSION TYPE', product.transmissionType],
                          ].map(([label, value], index) => (
                            <div className="box-specs__item" key={index}>
                              <span className="box-specs__label">{label}</span>
                              <span className="box-specs__value">{value}</span>
                            </div>
                          ))}
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