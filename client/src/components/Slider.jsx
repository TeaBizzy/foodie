import React, { useState } from 'react'

import "./Slider.css"

const Slider = () => {
const [data, setData] = useState(0)

  return (
    <div className="set-distance">
      <div className="distance-labels">
        <span className="slider-label">Distance</span>
        <span className="distance-value">{data} m</span>
      </div>
      <input className="distance-slider" type='range' min='0' max="5000" step="100" value={data} onChange={(event) => setData(event.target.value)}/>
    </div>
  )
}

export default Slider