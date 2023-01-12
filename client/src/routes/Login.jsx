import React, { useEffect } from 'react'
import "../components/Login.css"
import axios from 'axios'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { user } = props

  // Redirects the user if they are already logged in.
  useEffect(() => {
    if(user) {
      navigate('/')
    }
  })

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  function setLogin () {
    axios({
      method: 'post',
      url: '/login',
      data: {
        user: {
          email: email,
          password: password
        }
      },
    }).then((response) => {
      if(response.data.id !== null) {
        navigate("/")
      } else {
        navigate("/login")
      }
    });
  }

  return (
    <div className="container">
      <h1 className="login-h1">Foodie</h1>
      <h2>Hungry for options? Let us be your culinary compass!</h2>
      <form>
        <input onChange={handleEmail} value={email} type="text" placeholder="Email"></input>
        <input onChange={handlePassword} value={password} type="password" placeholder="Password"></input>
      </form>
      <div className="registration-buttons">
        <button onClick={() => setLogin()}  className="login-button">Login</button>
        <span className="registration-prompt">Not a member?</span>
        <button onClick={() => window.location.replace('/register')} className="register-button">Register</button>
      </div>
    </div>
  )
}

export default Login