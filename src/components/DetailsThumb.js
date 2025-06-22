import React from "react";
import "../components/Details/styles/DetailsThumb.scss";

export default function DetailsThumb({ images, setIndex, activeIndex }) {
  if (!images || images.length === 0) return null;

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="thumb-overlay">
      <button className="thumb-btn left" onClick={handlePrev}>‹</button>
      <button className="thumb-btn right" onClick={handleNext}>›</button>
    </div>
  );
}
