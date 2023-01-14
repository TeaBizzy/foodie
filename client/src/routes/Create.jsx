import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import DateDetails from '../components/DateDetails'
import LocationDetails from '../components/LocationDetails'
import ParticipantDetails from '../components/ParticipantDetails'
import "../components/Create.css"

export default function Create() {
  const [reservationDate, setReservationDate] = useState(null);
  const [searchLocation, setSearchLocation] = useState('');
  const [searchRadius, setSearchRadius] = useState(500);
  const [invites, setInvites] = useState(['']);
  const navigate = useNavigate();

  function sendEmail(data) {
    axios({
      withCredentials: true,
      method: 'post',
      url: 'http://localhost:3000/sessions',
      data: {
        session: {
          reservation: data.reservationDate,
          location: data.searchLocation,
          radius: data.searchRadius,
          invites: data.invites.toString()
        }
      }
    }).then(res => navigate('/'))
      .catch(err => console.log(err.response.data))
  }

  return (
    <div>
      <div className="session-details">
        <DateDetails reservationDate={reservationDate} setReservationDate={setReservationDate}/>
        <LocationDetails 
          searchLocation={searchLocation} 
          setSearchLocation={setSearchLocation}
          searchRadius={searchRadius}
          setSearchRadius={setSearchRadius}
        />
        <ParticipantDetails invites={invites} setInvites={setInvites}/>
        <div className="create-session-buttons">
          <button onClick={()=> sendEmail({reservationDate, searchLocation, searchRadius, invites})} className="start-button">Start</button>
          <a href='/'><button className="cancel-button">Cancel</button></a>
        </div>
      </div>
    </div>
  )
}