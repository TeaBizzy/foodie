import React from 'react'
import './Loading.css'

export default function Loading(props) {


  return (
    <div style={{ display: props.loading ? 'block' : 'none' }}>
      <div className="loading-bar">
        <div>
        <h1> Foodie </h1>
        <h2> Gathering Resturants Near You </h2>
        </div>
        
        <div className="loading-bar-inner" style={{ width: '50%' }}></div>
      </div>
    </div>
  );


}