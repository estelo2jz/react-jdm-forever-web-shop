import React from 'react';

import './Maintenance.sass';

export default function MaintenanceThumb({ maintenanceService, setIndex }) {
  return (
    <div className="maintenance">
      {
        maintenanceService.map((item, index) => (
          <div className="maintenance__container">
            <p key={index}>{item}</p>
          </div>
        ))
      }
    </div>
  )
}