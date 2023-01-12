import React, { useEffect, useMemo, useRef, useState } from "react";
import axios from "axios"
import "../styles/Swiping.css";
import RestaurantCard from "../components/RestaurantCard";
import { FaTimesCircle, FaCheckCircle } from "react-icons/fa";
import TinderCard from "react-tinder-card";

function Swipping() {
  const [restaurants, setRestaurants] = useState([]);
  const [currentCardIdx, setCurrentCardIdx] = useState(restaurants.length - 1);

  const currentIndexRef = useRef(currentCardIdx);
  
  const childRefs = useMemo(
    () =>
      Array(restaurants.length)
        .fill(0)
        .map((i) => React.createRef()),
    [restaurants]
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
    if (canSwipe && currentCardIdx < restaurants.length) {
      await childRefs[currentCardIdx].current.swipe(dir);
    }
  };

  useEffect(() => {
    axios.get('http://localhost:3000/restaurants')
    .then(res => {
      console.log(res.data)
      setRestaurants(res.data)
      setCurrentCardIdx(res.data.length - 1)
    })
    .catch(err => {
      console.log(err);
    })
  }, [])

  const restaurantCards = restaurants.map((restaurant, idx) => {
    const { name, address, phone_number, website, rating, img_url } =
      restaurant;

    return (
      <RestaurantCard
        key={idx}
        name={name}
        address={address}
        phone_number={phone_number}
        website={website}
        rating={rating}
        img_url={img_url}
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