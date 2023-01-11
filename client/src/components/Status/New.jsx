import React from 'react'
import { FaPizzaSlice } from 'react-icons/fa'

import "./New.css"


const New = () => {
  return (
    <div className="status-new">
      <span className="new-message">New</span>
      <FaPizzaSlice size={30} style={{color: 'white'}}/>
    </div>
  )
}

export default New