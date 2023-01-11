import React from 'react'

import { FaUserAlt, FaPlusCircle } from 'react-icons/fa'
import "./ParticipantDetails.css"

const ParticipantDetails = () => {
  return (
    <div className="participant-container">
    <FaUserAlt size={60} style={{color: '#8E8E8E'}}/>
    <div className="participant-selection">
      <h1 className="participants-h1">Who?</h1>
      <div className="users">
        <span className="user-self">Me</span>
        <FaPlusCircle size={30} style={{color: '#EF1562', marginBottom: 5}} />
      </div>
      <input placeholder="Email"></input>
    </div>
  </div>
  )
}

export default ParticipantDetails