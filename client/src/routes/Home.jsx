import React, { useState, useEffect } from 'react'
import { FaPlusSquare } from "react-icons/fa"
import SessionCard from "../components/SessionCards/SessionCard"
import "../components/Home.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

export default function Home(props) {
  const { user } = props;
  const [sessions, setSessions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if(!user) return
    axios(`http://localhost:3000/user_session_data`, {withCredentials: true})
      .then((res) => {
        setSessions(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="home-container">
      <button className="add-button" onClick={() => navigate('/create')}>
        <FaPlusSquare size={60} style={{color: 'white', backgroundColor: '#EC1652', height: '100', width: '95%', borderRadius: '20px'}}/>
      </button>
      <div className="sessions-container">
        {sessions.map((session, idx) => <SessionCard 
          key={idx}
          sessionId={session.session_id}
          reservation={session.reservation}
          status={session.status}
          restaurant={session.restaurant}
          sessions = {sessions}
          setSessions= {setSessions}
          invitedUsers={session.invited_users}
        />)}
      </div>
    </div>
  )
}