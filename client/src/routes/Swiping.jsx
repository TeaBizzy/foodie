import React from 'react'
import Navbar from '../components/Navbar'
import '../components/Swiping.css'

function Swipping() {
  return (
    <div>
      <Navbar />
      <section>
        <div className='card'>
          <div className='card-header restaurant-name'>
            <span className='restaurant-name'><strong>RESTAURANT NAME</strong></span>
          </div>
          <div className='img-container'>
            <img className='restaurant-img' src='https://lh3.googleusercontent.com/places/AJDFj403wfy30LdMGcdMbsDzZi2PFJACPVuHKqufXiw3WeC1vVz-07Y993VQKzDC_dMETHmdJcQJJUlf92VDjD0v8zm0-IaVr0gazuQ=s1600-w600' />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Swipping