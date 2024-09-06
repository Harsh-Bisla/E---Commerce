import React from 'react'
import LoginImg from "../assets/Side Image.png"

function Login() {
  return (
    <section className='login-container'>
      <div className='section-left'>
        <img width={450} src={LoginImg} alt='login-img' />
      </div>
      <div className='section-right'>
        <h1>Log in to Exclusive</h1>
        <p>Enter your details below</p>
        <input type='text' placeholder='Email or Phone Number' />
        <br></br>
        <input type='password' placeholder='Password' />
        <div className='login-btn-container'>
          <button className='red-btn coupon-btn'>LogIn</button>
          <p id='forget-pass'>Forget Password?</p>
        </div>
      </div>
    </section>
  )
}

export default Login