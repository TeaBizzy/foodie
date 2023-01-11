import React from 'react'
import { FaStar, FaPizzaSlice } from 'react-icons/fa'

import "./Finished.css"

const Finished = () => {
  return (
    <div className="status-finished">
      <span className="finished-message">Finished</span>
      <FaStar size={30} style={{color: 'white'}}/>
    </div>
  )
}

export default Finished