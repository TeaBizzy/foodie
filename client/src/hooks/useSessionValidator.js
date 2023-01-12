import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ProtectedRoute() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (user && (location.pathname === '/login' || location.pathname === '/register')) {
      return;
    }

    axios('http://localhost:3000/signed_on', {withCredentials: true})
      .then(res => setUser(res.data))
      .catch(err => navigate('/login'))
  }, [])

  return { user }
};

