import axios from 'axios'
import React from 'react'
import { FaSignOutAlt } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

import "./Navbar.css"

const Navbar = () => {
  const navigate = useNavigate();
  
  function logout() {
    axios('http://localhost:3000/logout', {withCredentials: true})
      .then(navigate('/login'))
  }

  return (
    <div className="header">
      <h1 className="navbar-h1">Foodie</h1>
      <div className='user'>
        <span className='user-icon'></span>
        <FaSignOutAlt size={40} style={{color: '#EC1562'}} onClick={() => logout()}/>
      </div>
    </div>
  )
}

export default Navbar