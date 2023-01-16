import React from 'react'
import Finished from "../Status/Finished"
import NewStatus from "../Status/NewStatus"
import Pending from "../Status/Pending"
import "./SessionCard.css"
import formatReservation from '../../helpers/ReservationFormatter';
import { FaQuestionCircle, FaUserAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

export default function SessionCard(props) {
  const { status, reservation, invitedUsers, restaurant, sessionId, sessions, setSessions } = props;
  const navigate = useNavigate();
 
  function onDelete(event) {
   
    event.stopPropagation();

    axios({
      method: 'delete',
      url: `/sessions/${sessionId}`,
      withCredentials: true,
      baseURL: "http://localhost:3000"
    }).then((response) => {
      const newSessions = sessions.filter((session)=> session.session_id !== sessionId )
      console.log(newSessions)
      setSessions(newSessions)
    }).catch((error) => {console.log(error)});
  }
  

  function onSessionClicked() {
    switch(status) {
      case 0: 
        navigate(`/swiping/${sessionId}`)
        break;
      case 1:
        alert('You have already swipped these!')
        break;
      case 2:
        alert('This session is complete!')
        break;
      default:
        return;
    }
  }

  return (
    <div className="session" onClick={() => onSessionClicked()}>
        <div className="session-left">
          {restaurant ? 
            <img className="session-image" src={restaurant.img_url} alt="restaurant" /> :
            <FaQuestionCircle size={120} style={{color: '#EC1562', marginTop: '10px', marginLeft: '10px'}} />
          }
          <div className="restaurant-container">
            <div className="restaurant-details">
              {restaurant && <span className="session-restaurant-name">{restaurant.name}</span>}
              {restaurant && <span className="restaurant-address">{restaurant.address}</span>}
            </div>
            <div className="session-details">
              <span className="session-date">{formatReservation(reservation)}</span>
            </div>
          </div>
        </div>
        <div className="session-right">
          {status === 0 && <NewStatus />}
          {status === 1 && <Pending />}
          {status === 2 && <Finished />}
          <div className="session-participants">
            {/* Use map for now incase we gett to invite multiple users. */}
            
            {invitedUsers.map((user, idx) => {
            if(user.img_url) {
              return (
                <img key={idx} src={user.img_url} alt='👤' className='session-user'/>
              )
                
            } else {
              return (
              <img key={idx} src={"favicon.ico"} alt='👤' className='session-user'/>
              )
            }
              
            })}
          </div>
          <div className="session-buttons">
            <button onClick={(event)=> onDelete(event)} className="session-cancel-button">Delete</button>
          </div>
        </div>
      </div>
  )
}