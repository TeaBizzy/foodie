import React from 'react'
import Navbar from "../components/Navbar"
import { FaPlusSquare } from "react-icons/fa"
import HomePageSessions from "../components/HomePageSessions"

import "../components/Home.css"

const Home = () => {
  return (
    <>
    <Navbar />
    <div className="home-container">
      <div className="add-button">
        <FaPlusSquare size={60} style={{color: 'white', backgroundColor: '#EC1652', height: '100', width: '60%', borderRadius: '20px'}}/>
      </div>
      <HomePageSessions />
    </div>
    </>
  )
}

export default Home