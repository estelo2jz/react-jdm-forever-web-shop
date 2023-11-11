import React from 'react';

import './Maintenance.scss';

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