import React from 'react'

import "./HomePageSessions.css"

const HomePageSessions = () => {
  return (
    <div className="sessions-container">
      <div className="restaurant-container">
        <div className="restaurant-details">
          <span className="restaurant-name">Restaurant Name</span>
          <span className="restaurant-address">Restaurant Address</span>
        </div>
        <div className="session-details">
          <span className="session-date">Session Date</span>
          <span className="session-date">Session Time</span>
        </div>
      </div>
    </div>
  )
}

export default HomePageSessions