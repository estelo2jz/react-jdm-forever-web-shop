import React from 'react';

import './AboutThumb.sass';

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