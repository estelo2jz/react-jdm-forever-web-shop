import React from 'react'

export default function MaintenanceThumb({ maintenanceService, setIndex }) {
  return (
    <div className="thumb">
      {
        maintenanceService.map((item, index) => (
          <p key={index}>{item}</p>
        ))
      }
    </div>
  )
}