import React from 'react'

import Navbar from '../components/Navbar'
import DateDetails from '../components/DateDetails'
import LocationDetails from '../components/LocationDetails'
import ParticipantDetails from '../components/ParticipantDetails'
import "../components/Create.css"

const Create = () => {
  return (
    <div>
      <Navbar />
      <div className="session-details">
        <DateDetails />
        <LocationDetails />
        <ParticipantDetails />
        <div className="session-buttons">
          <button className="start-button">Start</button>
          <button className="cancel-button">Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default Create