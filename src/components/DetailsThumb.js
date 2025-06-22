import React from "react";
import "./Details/styles/DetailsThumb.scss";

export default function DetailsThumb({ images, setIndex }) {
  if (!images || images.length === 0) return null;

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="thumb-overlay">
      <button className="thumb-btn left" onClick={handlePrev}>
        <span>‹</span>
      </button>
      <button className="thumb-btn right" onClick={handleNext}>
        <span>›</span>
      </button>
    </div>
  );
}
