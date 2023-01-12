import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../styles/Swiping.css';
import RestaurantCard from '../components/RestaurantCard';
import { FaTimesCircle, FaCheckCircle } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';

function Swipping() {
  const [session, setSession] = useState({restaurants: []});
  const [currentCardIdx, setCurrentCardIdx] = useState(0);
  const navigate = useNavigate();
  const { session_id } = useParams();
  
  useEffect(() => {
    axios.get(`http://localhost:3000/session_restaurants/${session_id}`, {withCredentials: true})
    .then(res => {
      setSession(res.data)
    })
    .catch(err => {
      console.log(err);
    })
  }, [])

  useEffect(() => {
    if(currentCardIdx === currentCardIdx.length - 1) {
      navigate('/')
    }
  }, [currentCardIdx])

    const restaurantCards = session.restaurants.map((restaurant) => {
      
      return (
        <RestaurantCard
          key={restaurant.id}
          name={restaurant.name}
          address={restaurant.address}
          phone_number={restaurant.phone_number}
          website={restaurant.website}
          rating={restaurant.rating}
          img_url={restaurant.img_url}
        />
      )
    })

  function onSwipe(isApproved) {
    if(currentCardIdx !== session.restaurants.length - 1) {
      setCurrentCardIdx(prev => prev + 1)
    } else {
      navigate('/')
    } 
  }

  return (
    <div>
      <section>
        {restaurantCards[currentCardIdx]}
      </section>
      <section>
        <FaTimesCircle size={120} className='buttons' style={{color: '#EC1562'}} onClick={() => onSwipe(false)} />
        <FaCheckCircle size={120} className='buttons' style={{color: '#3AF87A'}} onClick={() => onSwipe(true)} />
      </section>
    </div>
  );
}

export default Swipping