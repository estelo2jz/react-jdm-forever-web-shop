import React from 'react';

import './Maintenance.sass';

export default function DescThumb({ modList, setIndex }) {
  return (
    <div className="maintenance">
      {
        modList.map((item, index) => (
          <div className="maintenance__container">
           <p>{item}</p>
          </div>
        ))
      }
    </div>
  )
}