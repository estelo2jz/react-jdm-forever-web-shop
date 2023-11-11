import React from 'react';

import './AboutThumb.scss';

export default function AboutThumb({ aboutUs, setIndex }) {
  return (
    <div className="about-thumb">
      {
        aboutUs.map((item, index) => (
          <p>{item}</p>
        ))
      }
    </div>
  )
}