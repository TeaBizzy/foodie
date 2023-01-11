import React from 'react'
import keg from "../assets/keg.jpg"
import "./HomePageSessions.css"

const HomePageSessions = () => {
  return (
    <div className="sessions-container">
      <div className="session">
        <img className="session-image" src={keg}></img>
        <div className="session-left">
          <div className="restaurant-container">
            <div className="restaurant-details">
              <span className="restaurant-name">Restaurant Name</span>
              <span className="restaurant-address">Restaurant Address</span>
            </div>
            <div className="session-details">
              <span className="session-date">Session Date</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePageSessions