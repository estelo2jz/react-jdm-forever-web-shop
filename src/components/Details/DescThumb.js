import React from 'react';

import './Thumb.scss';

export default function DescThumb({ modList, setIndex }) {
  return (
    <div className="thumb">
      {
        modList.map((item, index) => (
          <p>{item}</p>
        ))
      }
    </div>
  )
}