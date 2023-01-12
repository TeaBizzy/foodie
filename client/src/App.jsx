import { Route, Routes, useNavigate } from "react-router-dom"
import Home from "./routes/Home"
import Registration from './routes/Registration';
import Login from './routes/Login';
import { useState } from 'react';
import axios from "axios";
import Create from "./routes/Create";
import Swipping from './routes/Swiping';
import useSessionValidator from './hooks/useSessionValidator';
import Navbar from "./components/Navbar";

function App() {
  const navigate = useNavigate();

  const { user } = useSessionValidator();

  function setLogout () {
    axios({
      method: 'post',
      url: '/logout'
    }).then(() => {
        navigate("/login")
    });
  }

  return (
    <>
      {user && <Navbar />}
      <Routes>
        <Route path="/register" element={<Registration user={user} />} />
        <Route path="/login" element={<Login user={user} />} />
        <Route path="/" element={<Home />}/>
        <Route path="/create" element={<Create />} />
        <Route path="/swiping" element={<Swipping />} />
      </Routes>
    </>
  );
}

export default App;
