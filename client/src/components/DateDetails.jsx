import React from 'react'
import DatePicker from 'react-datepicker'
import { FaCalendarAlt } from 'react-icons/fa'
import 'react-datepicker/dist/react-datepicker.css'

import './DateDetails.css'

export default function DateDetails(props) {
  const {reservationDate, setReservationDate} = props

  return (
    <div className="date-container">
      <FaCalendarAlt size={60} style={{color: '#8E8E8E'}}/>
      <div className="date-selection">
        <h1 className="date-h1">When?</h1>
        <DatePicker 
          selected={reservationDate} 
          onChange={date => setReservationDate(date)} 
          showTimeSelect
          dateFormat="Pp"/>
      </div>
    </div>
  )
}