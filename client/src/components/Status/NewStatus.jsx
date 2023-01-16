import React from 'react'
import { FaPizzaSlice } from 'react-icons/fa'

import "./NewStatus.css"


const NewStatus = () => {
  return (
    <div className="status-new">
      <span className="new-message">New</span>
      <FaPizzaSlice size={30} style={{color: 'white', marginRight: 5}}/>
    </div>
  )
}

export default NewStatus