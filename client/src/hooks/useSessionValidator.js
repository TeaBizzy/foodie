import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useSessionValidator() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/login' || location.pathname === '/register') {
      return;
    }

    axios('signed_on', 
      {
        withCredentials: true,
        baseURL: 'https://foodie-api-eg2u.onrender.com'
      })
      .then(res => setUser(res.data))
      .catch((err) => {
        setUser(null);
        navigate('/login')
      })
  }, [location.pathname])

  return { user }
};

