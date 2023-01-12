import React from 'react'
import Navbar from "../components/Navbar"
import { FaPlusSquare } from "react-icons/fa"
import SessionCard from "../components/SessionCards/SessionCard"


import "../components/Home.css"

const mockedData = [
  {
    state: "New",
  },
  {
    state: "Pending",
  },
  {
    name: "Card",
    address: "Some Address",
    date: "Some Date",
    image: "google.com",
    state: "Finished",
  },
];

const Home = () => {
  return (
    <div className="home-container">
      <a href='/create'>
        <button className="add-button">
          <FaPlusSquare size={60} style={{color: 'white', backgroundColor: '#EC1652', height: '100', width: '95%', borderRadius: '20px'}}/>
        </button>
      </a>
      {mockedData.map((data) => <SessionCard 
      name={data.name}
      address={data.address} 
      date={data.date} 
      image={data.image} 
      state={data.state} 
      />)}
    </div>
  )
}

export default Home