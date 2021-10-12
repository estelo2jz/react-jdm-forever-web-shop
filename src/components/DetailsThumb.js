import React from 'react';
// import './DetailsThumb.scss';

export default function DetailsThumb({ images, setIndex }) {
  return (
    <div className="thumb">
      {
        images.map((img, index) => (
        <div>

          <img src={img} alt="" key={index}
            onClick={() => setIndex(index)} />
        </div>
        ))
      }
    </div>
  )
}