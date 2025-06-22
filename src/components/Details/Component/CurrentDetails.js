import React, { useContext, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { CurrentDataContext } from '../../Data/Current/CurrentInventory';
import DetailsThumb from '../../DetailsThumb';
import CurrentContacts from './DetailsContacts/CurrentContacts';
import { Link } from 'react-router-dom';
import HeaderInventory from '../../Home/HeaderInventory';

export default function CurrentDetails() {
  const { id } = useParams();
  const value = useContext(CurrentDataContext);
  const [products] = value.products;

  const [index, setIndex] = useState(0);
  const imgDiv = useRef();
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const details = products.filter((product) => product._id === id);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    imgDiv.current.style.backgroundPosition = `${x}% ${y}%`;
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e, product) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const distance = touchStartX.current - touchEndX.current;

    // Adjust threshold to your liking
    if (distance > 50) {
      // Swipe left = next image
      setIndex((prev) => (prev + 1) % product.images.length);
    } else if (distance < -50) {
      // Swipe right = previous image
      setIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
    }
  };

  return (
    <>
      {details.map((product) => (
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
              <div
                className="box-img__main"
                ref={imgDiv}
                onMouseMove={handleMouseMove}
                onMouseLeave={() => (imgDiv.current.style.backgroundPosition = 'center')}
                onTouchStart={handleTouchStart}
                onTouchEnd={(e) => handleTouchEnd(e, product)}
                style={{
                  backgroundImage: `url(${product.images[index]})`,
                }}
              />
              {/* <small style={{ textAlign: 'center', display: 'block', marginTop: '10px', color: '#777' }}>
                Swipe left/right on image
              </small> */}


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
              ].map(([label, value], i) => (
                <div className="box-specs__item" key={i}>
                  <span className="box-specs__label">{label}</span>
                  <span className="box-specs__value">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <CurrentContacts />
          <HeaderInventory />
        </div>
      ))}
    </>
  );
}
