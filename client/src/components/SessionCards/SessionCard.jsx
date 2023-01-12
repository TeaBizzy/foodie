import React from 'react'
import Finished from "../Status/Finished"
import NewStatus from "../Status/NewStatus"
import Pending from "../Status/Pending"
import "./SessionCard.css"
import formatReservation from '../../helpers/ReservationFormatter';
import { FaQuestionCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'

export default function SessionCard(props) {
  const { status, reservation, invitedUsers, restaurant, sessionId } = props;
  const navigate = useNavigate();

  return (
    <div className="session" onClick={() => navigate(`/swiping`, {sessionId})}>
        <div className="session-left">
          {restaurant ? 
            <img className="session-image" src={restaurant.img_url} alt="restaurant" /> :
            <FaQuestionCircle size={120} style={{color: '#EC1562'}} />
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
            {invitedUsers.map((user, idx) => 
              <img key={idx} src={user.img_url} alt='user profile img' className='session-user'/>
            )}
          </div>
          <div className="session-buttons">
            <button className="session-edit-button">Edit</button>
            <button className="session-cancel-button">Cancel</button>
          </div>
        </div>
      </div>
  )
}