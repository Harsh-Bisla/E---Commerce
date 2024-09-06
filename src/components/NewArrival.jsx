import React from 'react'
import playImg from "../assets/Frame 684.png"

function NewArrival() {
  return (
    <>
      <section className='newArrival-container'>
        <div className='today'>
          <div className='box'></div>
          <h3>Featured</h3>
        </div>
        <h1>New Arrivals</h1>
        <div className='image-container'>
          <img width={500} src={playImg} alt='hero' />
          <img width={500} src={playImg} alt='hero' />
        </div>
      </section>

      <section className='service'>
        <div className='ser-box'>
          <i className="fa-solid fa-truck"></i>
          <h3>FREE AND FAST DELIVERY</h3>
          <p>Free delivery for all orders over Rs.500</p>
        </div>

        <div className='ser-box'>
          <i className="fa-solid fa-headphones"></i>
          <h3>24/7 CUSTOMER SERVICE</h3>
          <p>Friendly 24/7 Customer Support</p>
        </div>

        <div className='ser-box'>
          <i className="fa-solid fa-award"></i>
          <h3>MONEY BACK GURANTEE</h3>
          <p>We Return Money within 30 days</p>
        </div>
      </section>
    </>
  )
}

export default NewArrival