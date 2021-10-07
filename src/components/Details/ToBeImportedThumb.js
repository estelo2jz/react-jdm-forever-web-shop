import React from 'react';

import './Thumb.scss';

export default function ToBeImportedThumb({ toBeImported, setIndex }) {
  return (
    <div className="thumb">
      {
        toBeImported.map((item, index) => (
          <p>{item}</p>
        ))
      }
    </div>
  )
}