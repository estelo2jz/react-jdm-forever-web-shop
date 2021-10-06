import React from 'react'

export default function DetailsThumb({ imagesTwo, setIndex }) {
  return (
    <div className="thumb">
      {
        imagesTwo.map((img, index) => (
          <img src={img} alt="" key={index}
            onClick={() => setIndex(index)} />
        ))
      }
    </div>
  )
}