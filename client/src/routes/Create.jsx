import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import DateDetails from '../components/DateDetails'
import LocationDetails from '../components/LocationDetails'
import ParticipantDetails from '../components/ParticipantDetails'
import "../components/Create.css"
import Loading from '../components/Loading'

export default function Create() {
  const [reservationDate, setReservationDate] = useState(null);
  const [searchLocation, setSearchLocation] = useState('');
  const [searchRadius, setSearchRadius] = useState(500);
  const [invites, setInvites] = useState(['']);
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  function sendEmail(data) {
    setLoading(true)
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
    }).then(res => {
      setLoading(false)
      navigate('/')             
  })
      .catch(err => {
        setLoading(false)
        setError(err.response.data.error)
      })
  }

  return (
    <div>
       { loading ? <Loading
       loading = {loading}
       /> :  <div className="session-details">    
      { error && <span className="error-message">{error}</span>}
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
      </div>}
     
    </div>
  )
}