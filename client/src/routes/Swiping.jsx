import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import '../components/Swiping.css'
import RestaurantCard from '../components/RestaurantCard'



function Swipping() {
  const [restaurants, setRestaurants] = useState([]);

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

  return (
    <div>
      <Navbar />
      <section>
        {restaurantCards}
      </section>
    </div>
  );
}

export default Swipping