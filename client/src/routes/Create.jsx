import React from 'react'

import DateDetails from '../components/DateDetails'
import LocationDetails from '../components/LocationDetails'
import ParticipantDetails from '../components/ParticipantDetails'
import "../components/Create.css"

const Create = () => {
  return (
    <div>
      <div className="session-details">
        <DateDetails />
        <LocationDetails />
        <ParticipantDetails />
        <div className="create-session-buttons">
          <button className="start-button">Start</button>
          <a href='/'><button className="cancel-button">Cancel</button></a>
        </div>
      </div>
    </div>
  )
}

export default Create