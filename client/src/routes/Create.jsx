import React from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'
import DateDetails from '../components/DateDetails'
import LocationDetails from '../components/LocationDetails'
import ParticipantDetails from '../components/ParticipantDetails'
import "../components/Create.css"


const sendEmail = () => {
  axios({
    method: 'post',
    url: '/sessions',
    data: {
      user: {
        first_name: 'rahim',
        last_name: 'jamal',
        email: 'rahimj2196@gmail.com',
      }
    },
    dataType:"json",
    baseURL: "http://localhost:3000"
  })
}


const Create = () => {



  return (
    <div>
      <div className="session-details">
        <DateDetails />
        <LocationDetails />
        <ParticipantDetails />
        <div className="create-session-buttons">
          <button onClick={()=> sendEmail()} className="start-button">Start</button>
          <a href='/'><button className="cancel-button">Cancel</button></a>
        </div>
      </div>
    </div>
  )
}

export default Create