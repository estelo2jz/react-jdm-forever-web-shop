import React from 'react';

import './ToBeImported.sass';

export default function ToBeImportedThumb({ toBeImported, setIndex }) {
  return (
    <div className="to-be-imported">
      {
        toBeImported.map((item, index) => (
          <p className="to-be-imported">{item}</p>
        ))
      }
    </div>
  )
}