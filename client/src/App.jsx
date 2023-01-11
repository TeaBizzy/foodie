import { Route, Routes,useNavigate } from "react-router-dom"
import Registration from './routes/Registration';
import Login from './routes/Login';
import { useState, useEffect } from 'react';
import ProtectedRoute from './routes/ProtectedRoute'
import axios from "axios";

function App() {
  const [LoggedUser, setLoggedUser] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    
    axios({
      method: 'get',
      url: '/signed_on',
    }).then((response)=> {
      setLoggedUser(response.data)
      navigate('/')
    })

  }, []);
  return (
    <Routes>
      <Route path="/register" element={<Registration
        LoggedUser={LoggedUser}
        setLoggedUser={setLoggedUser}
      />} />
      <Route path = "/" element={
         <ProtectedRoute user={LoggedUser}>
        <p>HOME</p>
      </ProtectedRoute>
      }>
      </Route>
      

      <Route path="/login" element={<Login
        LoggedUser={LoggedUser}
        setLoggedUser={setLoggedUser}
      />} />
    </Routes>
  );
}

export default App;
