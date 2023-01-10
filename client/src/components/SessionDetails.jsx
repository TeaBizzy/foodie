import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import { FaCalendarAlt } from 'react-icons/fa'
import 'react-datepicker/dist/react-datepicker.css'

import './SessionDetails.css'

const SessionDetails = () => {
  const [selectedDate, setSelectedDate] = useState(null)

  return (
    <div className="date-container">
      <FaCalendarAlt size={60} style={{color: '#8E8E8E'}}/>
      <div className="date-selection">
        <h1>When?</h1>
        <DatePicker selected={selectedDate} onChange={date => setSelectedDate(date)}/>
      </div>
    </div>
  )
}

export default SessionDetails