import React from 'react'
import { FaSignOutAlt } from 'react-icons/fa'

import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="header">
      <h1 className="navbar-h1">Foodie</h1>
      <div className='user'>
        <span className='user-icon'></span>
        <FaSignOutAlt size={40} style={{color: '#EC1562'}}/>
      </div>
    </div>
  )
}

export default Navbar