import React from 'react';

import './Thumb.scss';

export default function AboutThumb({ aboutUs, setIndex }) {
  return (
    <div className="thumb">
      {
        aboutUs.map((item, index) => (
          <p>{item}</p>
        ))
      }
    </div>
  )
}