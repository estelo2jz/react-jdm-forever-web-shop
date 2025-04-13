import React, { useState } from "react";
import "./Shop.scss";

const dummyProducts = [
  {
    id: 1,
    name: "Nissan Skyline GT-R",
    image: "https://source.unsplash.com/600x400/?nissan,skyline",
    price: 85000,
  },
  {
    id: 2,
    name: "Toyota Supra MK4",
    image: "https://source.unsplash.com/600x400/?toyota,supra",
    price: 95000,
  },
  {
    id: 3,
    name: "Mazda RX-7",
    image: "https://source.unsplash.com/600x400/?mazda,rx7",
    price: 75000,
  },
];

export default function Shop() {
  const [products] = useState(dummyProducts);

  return (
    <div className="shop">
      <header className="shop__header">
        <h1>Available Inventory</h1>
        <div className="shop__controls">
          <select>
            <option value="default">Sort by</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
      </header>

      <section className="shop__grid">
        {products.map((car) => (
          <div className="shop__card" key={car.id}>
            <div className="shop__image" style={{ backgroundImage: `url(${car.image})` }}></div>
            <div className="shop__info">
              <h2>{car.name}</h2>
              <p>${car.price.toLocaleString()}</p>
              <button>View Details</button>
            </div>
          </div>
        ))}
      </section>

      <footer className="shop__footer">
        <p>Page 1 of 1</p>
        {/* Pagination controls could go here */}
      </footer>
    </div>
  );
}
