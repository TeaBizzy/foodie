import React from 'react'
import Navbar from "../components/Navbar"
import { FaPlusSquare } from "react-icons/fa"
import Completed from "../components/SessionCards/Completed"
import Incomplete from "../components/SessionCards/Incomplete"
import New from "../components/SessionCards/New"

import "../components/Home.css"

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <button className="add-button">
        <FaPlusSquare size={60} style={{color: 'white', backgroundColor: '#EC1652', height: '100', width: '95%', borderRadius: '20px'}}/>
      </button>
      <Completed />
      <Incomplete />
      <New />
    </div>
  )
}

export default Home