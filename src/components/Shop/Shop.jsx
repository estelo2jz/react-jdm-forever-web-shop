import React from "react";
import "./Shop.scss";

const accessories = [
  {
    id: 1,
    name: "JDM Rising Sun Sticker",
    image: "https://source.unsplash.com/300x300/?sticker,red",
    price: 5.99,
  },
  {
    id: 2,
    name: "Carbon Fiber Shift Knob",
    image: "https://source.unsplash.com/300x300/?shift,knob",
    price: 24.99,
  },
  {
    id: 3,
    name: "Turbocharger Keychain",
    image: "https://source.unsplash.com/300x300/?keychain,turbo",
    price: 7.5,
  },
  {
    id: 4,
    name: "Vinyl Windshield Banner",
    image: "https://source.unsplash.com/300x300/?banner,car",
    price: 14.95,
  },
  {
    id: 5,
    name: "Custom License Plate Frame",
    image: "https://source.unsplash.com/300x300/?license,frame",
    price: 12.0,
  },
  {
    id: 6,
    name: "Fuel Cut Decal Pack",
    image: "https://source.unsplash.com/300x300/?jdm,decal",
    price: 9.5,
  }
];

const Shop = () => {
  return (
    <section className="shop">
      <h1 className="shop__title">Stickers & Accessories</h1>
      <div className="shop__grid">
        {accessories.map((item) => (
          <div key={item.id} className="shop__card">
            <div className="shop__image" style={{ backgroundImage: `url(${item.image})` }}></div>
            <div className="shop__info">
              <h2>{item.name}</h2>
              <p>${item.price.toFixed(2)}</p>
              <button>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Shop;
