import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import '../styles/Swiping.css';
import RestaurantCard from '../components/RestaurantCard';
import { FaTimesCircle, FaCheckCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Swipping() {
  const [restaurants, setRestaurants] = useState([]);
  const [currentCardIdx, setCurrentCardIdx] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3000/restaurants')
    .then(res => {
      console.log(res.data)
      setRestaurants(res.data)
    })
    .catch(err => {
      console.log(err);
    })
  }, [])

  const restaurantCards = restaurants.map((restaurant) => {
    const {name, address, phone_number, website, rating, img_url} = restaurant
    
    return (
      <RestaurantCard 
        name={name}
        address={address}
        phone_number={phone_number}
        website={website}
        rating={rating}
        img_url={img_url}
      />
    )
  })

  function onSwipe(isApproved) {
    if(currentCardIdx !== restaurants.length - 1) {
      setCurrentCardIdx(prev => prev + 1)
    } else {
      navigate('/')
    } 
  }

  return (
    <div>
      <Navbar />
      <section>
        {restaurantCards[currentCardIdx]}
      </section>
      <section>
        <FaTimesCircle size={120} style={{color: '#EC1562'}} onClick={() => onSwipe(false)} />
        <FaCheckCircle size={120} style={{color: '#3AF87A'}} onClick={() => onSwipe(true)} />
      </section>
    </div>
  );
}

export default Swipping