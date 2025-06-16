// components/CarCard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./CarCard.scss";

const CarCard = ({ car }) => {
  const navigate = useNavigate();

  return (
    <div className="car-card" onClick={() => navigate(`/car/${car._id}`)}>
      <div
        className="car-card__image"
        style={{ backgroundImage: `url(${car.images[0]})` }}
      />
      <div className="car-card__info">
        <h3>{car.make} {car.model}</h3>
        <p>{car.year}</p>
      </div>
    </div>
  );
};

export default CarCard;
