import React from 'react'

import Navbar from '../components/Navbar'
import DateDetails from '../components/DateDetails'

const Create = () => {
  return (
    <div>
      <Navbar />
      <div className="session-details">
        <DateDetails />
      </div>
    </div>
  )
}

export default Create