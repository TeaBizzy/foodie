import axios from 'axios'
import React from 'react'

import "../components/Registration.css"

const Registration = () => {
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('button').addEventListener('click', registerUser)
  });
  function registerUser() {
    axios({
      method: 'post',
      url: '/users',
      data: {
        user: {
          first_name: document.getElementById('First_Name').value,
          last_name: document.getElementById('Last_Name').value,
          email: document.getElementById('Email').value,
          password: document.getElementById('Password').value
        }
      },
      baseURL: "http://localhost:3000"
    });
  }
  return (
    <div className="container">
      <h1 className="register-h1">Foodie</h1>
      <h2>Hungry for options? Let us be your culinary compass!</h2>
      <form>
        <input id='First_Name' type="text" placeholder="First Name"></input>
        <input id='Last_Name' type="text" placeholder="Last Name"></input>
        <input id = "Email" type="text" placeholder="Email"></input>
        <input id= "Password"type="password" placeholder="Password"></input>
      </form>
      <div className="registration-buttons">
        <button onClick={() => registerUser()} className="register-button">Register</button>
        <span className="member-prompt">Already a member?</span>
        <button className="login-button">Login</button>
      </div>
    </div>

  )

}

export default Registration