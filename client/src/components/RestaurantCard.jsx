import React from "react";
import { useState } from "react";
import '../styles/RestaurantCard.css';
import { FaStar, FaStarHalf } from 'react-icons/fa';

function RestaurantCard(props) {
  const {name, address, phone_number, website, rating, img_url} = props;

  const [displayDetails, setDisplayDetails] = useState(false);

  // Returns an array of star components
  function generateRating(rating) {
    const stars = []
    let counter = rating
    let idx = 0
    while(counter > 0) {
      // Adds a whole star
      if(counter >= 1) {
        stars.push(<FaStar key={idx} size={24} style={{color: '#EC1562'}}/>)
        counter --
        idx ++
        continue
      }
      // Only add a half star if remaining rating is >= 0.5 
      if (counter < 1 && counter >= 0.5) {
        stars.push(<FaStarHalf key={idx} size={24} style={{color: '#EC1562'}}/>)
      }
      counter -= 1
      idx ++
    }
    return stars
  }

  return (
    <div className='card' onMouseUp={() => {setDisplayDetails(!displayDetails)}}>
      <div className='card-header restaurant-name'>
        <span className='restaurant-name'>{name.toUpperCase()}</span>
      </div>
      <div className={`img-container ${displayDetails && 'details-visible'}`}>
        <img className={'restaurant-img'} src={img_url} />
      </div>
      <div className={`${displayDetails ? 'details-container' : 'hidden'}`}>
        <div>{generateRating(rating)}</div>
        <div>{address}</div>
        <div>6.2km</div>
        <div>PHONE ICON{phone_number}</div>
        <div>{website}</div>
      </div>
    </div>
  )
}

export default RestaurantCard