import React, { useContext, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "./DataProvider";
import DetailsThumb from "./DetailsThumb";
import DetailsContact from "./Details/DetailsContact";
import HeaderInventory from "./Home/HeaderInventory";
import "./Details/Details.scss";

export default function Details() {
  const { id } = useParams();
  const value = useContext(DataContext);
  const [products] = value.products;

  const [index, setIndex] = useState(0);
  const imgDiv = useRef();
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const details = products?.filter((product) => product._id === id);
  const product = details?.[0]; // optional chaining

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    imgDiv.current.style.backgroundPosition = `${x}% ${y}%`;
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const threshold = 50;
    if (touchStartX.current - touchEndX.current > threshold) {
      setIndex((prev) => (prev + 1) % product.images.length);
    } else if (touchEndX.current - touchStartX.current > threshold) {
      setIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
    }
  };

  if (!product) return <p className="details__loading">Loading vehicle details...</p>;

  return (
    <section className="details" key={product._id}>
      <div className="details__header">
        <h2 className="details__title">{product.fullName}</h2>
        <div className="details__price">${product.price.toLocaleString()}</div>
      </div>

      <div className="details__content">
        <div className="details__media">
          <div
            className="details__image-main"
            ref={imgDiv}
            onClick={() => setIndex((prev) => (prev + 1) % product.images.length)}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => (imgDiv.current.style.backgroundPosition = "center")}
            style={{ backgroundImage: `url(${product.images[index]})` }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="thumb-overlay">
              <button
                className="thumb-btn left"
                onClick={(e) => {
                  e.stopPropagation();
                  setIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
                }}
              >
                ‹
              </button>
              <button
                className="thumb-btn right"
                onClick={(e) => {
                  e.stopPropagation();
                  setIndex((prev) => (prev + 1) % product.images.length);
                }}
              >
                ›
              </button>
            </div>
          </div>

          {/* <DetailsThumb images={product.images} setIndex={setIndex} activeIndex={index} /> */}
          <small className="details__hint">(Click or swipe to view next)</small>
        </div>

        <div className="details__specs">
          {[
            ["Year", product.year],
            ["Make", product.make],
            ["Model", product.model],
            ["Body Color", product.bodyColor],
            ["Stock #", product.stockNumber],
            ["VIN", product.vin],
            ["Miles", product.miles],
            ["Engine Size", product.engineSize],
            ["Transmission", product.transmissionType],
          ].map(([label, val]) => (
            <div className="spec-item" key={label}>
              <span>{label}</span>
              <span>{val}</span>
            </div>
          ))}
        </div>
      </div>

      <DetailsContact />
      <HeaderInventory />
    </section>
  );
}
