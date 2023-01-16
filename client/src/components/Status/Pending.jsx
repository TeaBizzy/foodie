import React from 'react'
import { FaClock } from 'react-icons/fa'

import "./Pending.css"

const Pending = () => {
  return (
    <div className="status-pending">
      <span className="pending-message">pending</span>
      <FaClock size={30} style={{color: 'white', marginRight: 5}}/>
    </div>
  )
}

export default Pending