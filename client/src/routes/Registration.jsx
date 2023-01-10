import React from 'react'

import "../components/Registration.css"

const Registration = () => {
  return (
    <div className="container">
      <h1 className="register-h1">Foodie</h1>
      <h2>Hungry for options? Let us be your culinary compass!</h2>
      <form>
        <input type="text" placeholder="First Name"></input>
        <input type="text" placeholder="Last Name"></input>
        <input type="text" placeholder="Email"></input>
        <input type="password" placeholder="Password"></input>
      </form>
      <div className="registration-buttons">
        <span className="register-button">Register</span>
        <span className="member-prompt">Already a member?</span>
        <span className="login-button">Login</span>
      </div>
    </div>
  )
}

export default Registration