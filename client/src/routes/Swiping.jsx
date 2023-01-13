import React, { useEffect, useMemo, useRef, useState } from "react";
import axios from "axios"
import "../styles/Swiping.css";
import RestaurantCard from "../components/RestaurantCard";
import { FaTimesCircle, FaCheckCircle } from "react-icons/fa";
import { useNavigate, useParams } from 'react-router-dom';
import TinderCard from "react-tinder-card";

function Swipping() {
  const [session, setSession] = useState({restaurants: []});
  const [currentCardIdx, setCurrentCardIdx] = useState(session.restaurants.length - 1);
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
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
  };

  const swipe = async (dir) => {
    if (canSwipe && currentCardIdx < session.restaurants.length) {
      await childRefs[currentCardIdx].current.swipe(dir);
    }
  };

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

  useEffect(() => {
    if(currentCardIdx === currentCardIdx.length - 1) {
      navigate('/')
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