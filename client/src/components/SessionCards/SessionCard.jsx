import React from 'react'
import pending from "../../assets/pending.png"
import Finished from "../Status/Finished"
import NewStatus from "../Status/NewStatus"
import Pending from "../Status/Pending"
import "./SessionCard.css"

const SessionCard = (props) => {
  return (
    <div className="sessions-container">
      <div className="session">
        <div className="session-left">
          <img className="session-image" src={props.image ? props.image : pending} alt="restaurant"></img>
          <div className="restaurant-container">
            <div className="restaurant-details">
              {props.name && <span className="session-restaurant-name">{props.name}</span>}
              {!props.name && <span className="session-restaurant-name" style={{display: 'none'}}></span>}
              {props.address && <span className="restaurant-address">{props.address}</span>}
              {!props.address && <span className="restaurant-address" style={{display: 'none'}}></span>}
            </div>
            <div className="session-details">
              <span className="session-date">{props.date}</span>
            </div>
          </div>
        </div>
        <div className="session-right">
          {props.state === "New" && <NewStatus />}
          {props.state === "Pending" && <Pending />}
          {props.state === "Finished" && <Finished />}
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

export default SessionCard