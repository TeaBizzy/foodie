import React from 'react'

import "../components/Login.css"

const Login = () => {
  return (
    <div className="container">
      <h1>Foodie</h1>
      <h2>Hungry for options? Let us be your culinary compass!</h2>
      <form>
        <input type="text" placeholder="Email"></input>
        <input type="password" placeholder="Password"></input>
      </form>
      <div className="registration-buttons">
        <span className="login-button">Login</span>
        <span className="registration-prompt">Not a member?</span>
        <span className="register-button">Register</span>
      </div>
    </div>
  )
}

export default Login