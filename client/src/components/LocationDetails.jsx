import React from 'react'
import {FaMapMarkerAlt} from 'react-icons/fa'
import Slider from "./Slider"
import "./LocationDetails.css"

const LocationDetails = () => {
  return (
    <div className="location-container">
      <div className="location-selection">
        <h1 className="location-h1">Where?</h1>
        <input placeholder="Location"></input>
        <Slider />
      </div>
      <FaMapMarkerAlt size={60} style={{color: '#8E8E8E'}}/>
    </div>
  )
}

export default LocationDetails