import React from 'react'
import "../components/Login.css"
import axios from 'axios'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
        props.setLoggedUser(response.data)

        navigate("/")
      } else {

        navigate("/login")
      }

     

    });
  }


  function setLogout () {
    axios({
      method: 'post',
      url: '/logout'
    }).then(() => {
        navigate("/login")
    });
  }
  return (
    <div className="container">
      <h1>Foodie</h1>
      <h2>Hungry for options? Let us be your culinary compass!</h2>
      <form>
        <input onChange={handleEmail} value={email} type="text" placeholder="Email"></input>
        <input onChange={handlePassword} value={password} type="password" placeholder="Password"></input>
      </form>
      <div className="registration-buttons">
        <button onClick={() => setLogin()}  className="login-button">Login</button>
        <span className="registration-prompt">Not a member?</span>
        <button onClick={() => window.location.replace('/register')} className="register-button">Register</button>
        <button onClick={() =>setLogout()} className="register-button">logout</button>
      </div>
    </div>
  )
}

export default Login