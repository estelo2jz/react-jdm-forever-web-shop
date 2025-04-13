import React, { useContext, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
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

  const details = products?.filter((product) => product._id === id);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    imgDiv.current.style.backgroundPosition = `${x}% ${y}%`;
  };

  if (!details?.length) return <p className="details__loading">Loading vehicle details...</p>;

  return (
    <>
      {details.map((product) => (
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
                onMouseMove={handleMouseMove}
                onMouseLeave={() => (imgDiv.current.style.backgroundPosition = "center")}
                style={{ backgroundImage: `url(${product.images[index]})` }}
              ></div>
              <DetailsThumb images={product.images} setIndex={setIndex} />
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
              ].map(([label, value]) => (
                <div className="spec-item" key={label}>
                  <span>{label}</span>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </div>

          <DetailsContact />
          <HeaderInventory />
        </section>
      ))}
    </>
  );
}
