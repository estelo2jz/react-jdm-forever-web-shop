import React from 'react';

import './Maintenance.scss';

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