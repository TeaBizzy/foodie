import React from 'react'

import "./Slider.css"

export default function Slider(props) {
const { searchRadius, setSearchRadius } = props;

  return (
    <div className="set-distance">
      <div className="distance-labels">
        <span className="slider-label">Distance</span>
        <span className="distance-value">{searchRadius} m</span>
      </div>
      <input 
        className="distance-slider" 
        type='range' 
        min='0' 
        max="5000" 
        step="100" 
        value={searchRadius} 
        onChange={(e) => setSearchRadius(e.target.value)}/>
    </div>
  )
}