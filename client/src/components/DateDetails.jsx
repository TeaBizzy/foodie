import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import { FaCalendarAlt } from 'react-icons/fa'
import 'react-datepicker/dist/react-datepicker.css'

import './DateDetails.css'

const DateDetails = () => {
  const [selectedDate, setSelectedDate] = useState(null)

  return (
    <div className="date-container">
      <FaCalendarAlt size={60} style={{color: '#8E8E8E'}}/>
      <div className="date-selection">
        <h1 className="date-h1">When?</h1>
        <DatePicker 
        selected={selectedDate} 
        onChange={date => setSelectedDate(date)} 
        showTimeSelect
        dateFormat="Pp"/>
      </div>
    </div>
  )
}

export default DateDetails