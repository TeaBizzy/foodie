import axios from 'axios'
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../components/Registration.css"

const Registration = () => {

  const [first_name, setFirst_name] = useState('');
  const [last_name, setLast_name] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Handling the name change
  const handleFirstName = (e) => {
    setFirst_name(e.target.value.toLowerCase());
  };
  const handleLastName = (e) => {
    setLast_name(e.target.value.toLowerCase());

  };
  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value.toLowerCase());
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();    
      registerUser() 
  };


  function registerUser() {
    axios({
      withCredentials: true,
      method: 'post',
      url: '/users',
      data: {
        user: {
          first_name: first_name,
          last_name: last_name,
          email: email,
          password: password
        }
      },
      baseURL: "http://localhost:3000"
    }).then((res) => navigate('/'))
      .catch(err => setError(err.response.data.error));
  }
  return (

    <div className="container">
      <h1 className="register-h1">Foodie</h1>
      <h2 className="slogan">Hungry for options? Let us be your culinary compass!</h2>
      { error && <h3> {error}</h3>}
      <form>
        <input onChange={handleFirstName} value={first_name} type="text" placeholder="First Name"></input>
        <input onChange={handleLastName} value={last_name} type="text" placeholder="Last Name"></input>
        <input onChange={handleEmail} value={email} type="text" placeholder="Email"></input>
        <input onChange={handlePassword} value={password} type="password" placeholder="Password"></input>
      </form>
      <div className="registration-buttons">
        <button onClick={handleSubmit} type="submit" className="register-button">Register</button>
        <span className="member-prompt">Already a member?</span>
        <button onClick={() => navigate('/login')} className="login-button">Login</button>
      </div>
    </div>

  )

}

export default Registration