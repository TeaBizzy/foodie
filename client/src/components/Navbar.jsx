import axios from 'axios'
import React, { useReducer } from 'react'
import { FaSignOutAlt } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

import "./Navbar.css"

function Navbar(props) {
  const navigate = useNavigate();
  const { userImg } = props;

  function logout() {
    axios('http://localhost:3000/logout', {method: 'post', withCredentials: true})
      .then(navigate('/login'))
  }

  return (
    <div className="header">
      <h1 className="navbar-h1"><a href='/'>Foodie</a></h1>
      <div className='user'>
        <img src={userImg} className='user-icon' />
        <FaSignOutAlt size={40} className={'button-icon'} onClick={() => logout()}/>
      </div>
    </div>
  )
}

export default Navbar