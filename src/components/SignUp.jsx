import React from 'react'
import LoginImg from "../assets/Side Image.png"
import Google from "../assets/Icon-Google.png"
import { Link } from 'react-router-dom'



function SignUp() {
  return (
    <section className='login-container'>
      <div className='section-left'>
        <img width={450} src={LoginImg} alt='login-img' />
      </div>
      <div className='section-right'>
        <h1>Create an Account</h1>
        <p>Enter your details below</p>
        <input type='text' placeholder='Name' />
        <input type='text' placeholder='Email or Phone Number' />
        <br></br>
        <input type='password' placeholder='Password' />
        <button className='create-account-btn'>Create Account</button>
        <br />
        <button className='sign-up-btn'><img width={14} src={Google} />Sign up with Google</button>
        <p id='login'>Already have an account? <Link to="/login"><span>Log In</span></Link></p>
      </div>
    </section>
  )
}

export default SignUp