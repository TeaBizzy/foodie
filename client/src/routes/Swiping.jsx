import React, { useEffect, useMemo, useState } from "react";
import axios from "axios"
import "../styles/Swiping.css";
import RestaurantCard from "../components/RestaurantCard";
import { FaTimesCircle, FaCheckCircle } from "react-icons/fa";
import { useNavigate, useParams } from 'react-router-dom';
import TinderCard from "react-tinder-card";

const isSwipedMap = new Map();

const funnyResponses = ["Great Choice!", "Looks good!", "are you for real?", "can I be invited too?", "Looks like a good time!", "The apps here are amazing!"]

const banterResponses = ["Sorry, not sorry", "Maybe next time", "You had me at goodbye", "I'm not feeling it", "I'm not convinced", "I'll pass", "Sorry, not interested", "Thanks, but no thanks", "Not my type", "I'm not that desperate"]

function Swipping() {
  const [session, setSession] = useState({restaurants: []});
  const [currentCardIdx, setCurrentCardIdx] = useState();
  const [lastDirection, setLastDirection] = useState()
  const [isHovering, setIsHovering] = useState(false);
  const navigate = useNavigate();
  const { session_id } = useParams();

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const childRefs = useMemo(
    () =>
      Array(session.restaurants.length)
        .fill(0)
        .map((i) => React.createRef()),
    [session.restaurants]
  );

  const canSwipe = currentCardIdx >= 0;

  const swiped = (dir, index) => {
    if(dir === 'right'){
      setLastDirection(funnyResponses[Math.floor(Math.random()*funnyResponses.length)])
    }
    

    if(dir === 'left') {
      setLastDirection(banterResponses[Math.floor(Math.random()*funnyResponses.length)])
    }
    if (!isSwipedMap.get(index)) {
      isSwipedMap.set(index, true);
      axios('http://localhost:3000/swipe', {
        withCredentials: true,
        method: 'post',
        data: {
          restaurant_id: session.restaurants[index].id,
          is_approved: dir === 'left' ? false : true
        }
      }).then(() => {setCurrentCardIdx(prev => prev - 1)})
    }
  };

  // For button swipe
  const swipe = async (dir) => {
    setLastDirection(dir)
    if (!isSwipedMap.get(currentCardIdx)) {
      isSwipedMap.set(currentCardIdx, true);
      axios('http://localhost:3000/swipe', {
        withCredentials: true,
        method: 'post',
        data: {
          restaurant_id: session.restaurants[currentCardIdx].id,
          is_approved: dir === 'left' ? false : true
        }
      }).then(() => {setCurrentCardIdx(prev => prev - 1)})
      if (canSwipe) {
        await childRefs[currentCardIdx].current.swipe(dir);
      };
    }
  }

  // Loads restaurant data for the session from api.
  useEffect(() => {
    axios.get(`http://localhost:3000/session_restaurants/${session_id}`, {withCredentials: true})
    .then(res => {
      setSession(res.data)
      setCurrentCardIdx(res.data.restaurants.length - 1)
      res.data.restaurants.forEach((element, index) => {
        isSwipedMap.set(index, false);
      })
    })
    .catch((err) => {console.log(err)})
  }, [])

  // Returns user to the home page when swiping is complete.
  useEffect(() => {
    if(currentCardIdx < 0) {
      axios(`http://localhost:3000/sessions/${session_id}/resolve`, {withCredentials: true})
        .then(() => {navigate('/')})
        .catch((err) => {console.log(err)})
    }
    console.log(currentCardIdx)
  }, [currentCardIdx])

  const restaurantCards = session.restaurants.map((restaurant, idx) => {

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
    );
  });

  return (
    <div className="page-container">
      <div className="contained-restaurants" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <section className="rest-container">
          {restaurantCards.map((element, index) => {
            return (
              <TinderCard
                ref={childRefs[index]}
                key={index}
                className="stacked"
                onSwipe={(dir) => swiped(dir, index)}
                swipeThreshold={1}
                swipeRequirementType="position"
                preventSwipe={['up', 'down']}
              >
                {element}
              </TinderCard>
            );
          })}
        </section>
        <div className="">
          <FaTimesCircle
            size={120}
            className="times-button"
            onClick={() => swipe("left")}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
          <FaCheckCircle
            size={120}
            className="check-button"
            onClick={() => swipe("right")}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </div>
        {lastDirection ? (
          <h2 
            className="swipe-direction"
            key={lastDirection}>
             {lastDirection}
          </h2>
        ) : (
          <h2 className="swipe-direction">
            Your culinary adventure awaits!
          </h2>
        )}
      </div>
    </div>
  );
}

export default Swipping