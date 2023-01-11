import React from "react";
import '../components/RestaurantCard.css';

function RestaurantCard(props) {
  const {name, address, phone_number, website, rating, img_url} = props

  return (
    <div className='card'>
      <div className='card-header restaurant-name'>
        <span className='restaurant-name'><strong>{name.toUpperCase()}</strong></span>
      </div>
      <div className='img-container'>
        <img className='restaurant-img' src={img_url} />
      </div>
    </div>
  )
}

export default RestaurantCard