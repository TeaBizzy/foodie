import React from 'react'
import pending from "../../assets/pending.png"
import Pending from "../Status/Pending"
import "./SessionCard.css"

const Incomplete = () => {
  return (
    <div className="sessions-container">
      <div className="session">
        <div className="session-left">
          <img className="session-image" src={pending} alt="restaurant image"></img>
          <div className="restaurant-container">
            <div className="restaurant-details">
              <span className="restaurant-name" style={{display: 'none'}}>Restaurant Name</span>
              <span className="restaurant-address" style={{display: 'none'}}>Restaurant Address</span>
            </div>
            <div className="session-details">
              <span className="session-date" style={{marginTop: '55px'}}>Session Date</span>
            </div>
          </div>
        </div>
        <div className="session-right">
          <Pending />
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

export default Incomplete