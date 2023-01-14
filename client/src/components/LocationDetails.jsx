import React from 'react'
import {FaMapMarkerAlt} from 'react-icons/fa'
import Slider from "./Slider"
import "./LocationDetails.css"

export default function LocationDetails(props) {
  const { searchLocation, setSearchLocation, searchRadius, setSearchRadius } = props

  return (
    <div className="location-container">
      <div className="location-selection">
        <h1 className="location-h1">Where?</h1>
        <input 
          placeholder="Location" 
          onChange={e => setSearchLocation(e.target.value)}
          value={searchLocation} 
        />
        <Slider searchRadius={searchRadius} setSearchRadius={setSearchRadius}/>
      </div>
      <FaMapMarkerAlt size={60} style={{color: '#8E8E8E'}}/>
    </div>
  )
}