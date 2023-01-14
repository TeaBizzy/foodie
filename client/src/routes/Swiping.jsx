import React, { useEffect, useMemo, useRef, useState } from "react";
import axios from "axios"
import "../styles/Swiping.css";
import RestaurantCard from "../components/RestaurantCard";
import { FaTimesCircle, FaCheckCircle } from "react-icons/fa";
import { useNavigate, useParams } from 'react-router-dom';
import TinderCard from "react-tinder-card";

function Swipping() {
  const [session, setSession] = useState({restaurants: []});
  const [currentCardIdx, setCurrentCardIdx] = useState();
  const navigate = useNavigate();
  const currentIndexRef = useRef(currentCardIdx);
  const { session_id } = useParams();
  
  const childRefs = useMemo(
    () =>
      Array(session.restaurants.length)
        .fill(0)
        .map((i) => React.createRef()),
    [session.restaurants]
  );
  const updateCurrentIndex = (val) => {
    setCurrentCardIdx(val);
    currentIndexRef.current = val;
  };

  const canSwipe = currentCardIdx >= 0;

  const swiped = (index) => {
    updateCurrentIndex(index - 1);
  };

  const outOfFrame = (idx) => {
    updateCurrentIndex(idx)
  };

  // For button swipe
  const swipe = async (dir) => {
    axios('http://localhost:3000/swipe', {
      withCredentials: true,
      method: 'post',
      data: {
        restaurant_id: session.restaurants[currentCardIdx].id,
        is_approved: dir === 'left' ? false : true
      }
    }).then(res => console.log(res.data))
    if (canSwipe) {
      await childRefs[currentCardIdx].current.swipe(dir);
    };
  }

  // Loads restaurant data for the session from api.
  useEffect(() => {
    axios.get(`http://localhost:3000/session_restaurants/${session_id}`, {withCredentials: true})
    .then(res => {
      setSession(res.data)
      setCurrentCardIdx(res.data.restaurants.length - 1)
    })
    .catch(err => {
      console.log(err);
    })
  }, [])

  // Returns user to the home page when swiping is complete.
  useEffect(() => {
    if(currentCardIdx < 0) {
      axios(`http://localhost:3000/sessions/${session_id}/resolve`, {withCredentials: true})
        .then(navigate('/'))
        .catch(err => console.log(err))
    }
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
                onSwipe={() => swiped(index)}
                onCardLeftScreen={() => outOfFrame(index)}
              >
                {element}
              </TinderCard>
            );
          })}
        </section>
        <div className="">
          <FaTimesCircle
            size={120}
            className="buttons z100"
            style={{ color: "#EC1562" }}
            onClick={() => swipe("left")}
          />
          <FaCheckCircle
            size={120}
            className="buttons z100"
            style={{ color: "#3AF87A" }}
            onClick={() => swipe("right")}
          />
        </div>
      </div>
    </div>
  );
}

export default Swipping