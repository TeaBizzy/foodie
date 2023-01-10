import React from 'react'

import Navbar from '../components/Navbar'
import DateDetails from '../components/DateDetails'
import LocationDetails from '../components/LocationDetails'
import ParticipantDetails from '../components/ParticipantDetails'

const Create = () => {
  return (
    <div>
      <Navbar />
      <div className="session-details">
        <DateDetails />
        <LocationDetails />
        <ParticipantDetails />
      </div>
    </div>
  )
}

export default Create