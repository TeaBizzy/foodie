import React from 'react'
import keg from "../assets/keg.jpg"
import New from "./Status/New"
import "./HomePageSessions.css"

const HomePageSessions = () => {
  return (
    <div className="sessions-container">
      <div className="session">
        <div className="session-left">
          <img className="session-image" src={keg}></img>
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
        <div className="session-right">
          <New />
          <div className="session-participants">
            <span className="session-user"></span>
            <span className="session-user"></span>
            <span className="session-user"></span>
          </div>
          <div className="session-buttons">
            <button className="session-edit-button">Edit</button>
            <button className="session-cancel-button">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePageSessions