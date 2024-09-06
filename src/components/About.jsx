import React from 'react'
import { Link } from 'react-router-dom'
import AboutImg from "../assets/About.png"
import p1 from "../assets/p1.png"
import p2 from "../assets/p2.png"
import p3 from "../assets/p3.png"


function About() {
    return (
        <>
            <div className='heading'>
                <p><Link to="/"><span>Home / </span></Link> Contact</p>
            </div>

            <section className='about-container'>
                <div className='about-left'>
                    <h1>Our Story</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ducimus nemo, atque molestiae nobis ipsam, dicta officia, ab eligendi enim et impedit totam aliquam vel voluptate. Velit fugit laboriosam perspiciatis.lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta magnam minima, amet possimus ducimus enim quos facere reprehenderit dolorum ex totam eveniet delectus perspiciatis dignissimos dicta distinctio commodi quisquam vero.</p>
                </div>
                <div className='about-right'>
                    <img width={450} src={AboutImg} alt='about-image' />
                </div>
            </section>

            <section className='achivement'>
                <div className='achivement-box'>
                    <i className="fa-solid fa-house-chimney-user"></i>
                    <h1>10.5k</h1>
                    <p>Sellers active in our site</p>
                </div>
                <div className='achivement-box'>
                    <i className="fa-solid fa-sack-dollar"></i>
                    <h1>33k</h1>
                    <p>Monthly Product Sale</p>
                </div>
                <div className='achivement-box'>
                    <i className="fa-solid fa-person-military-pointing"></i>
                    <h1>45.5k</h1>
                    <p>Customer active in our site</p>
                </div>
                <div className='achivement-box'>
                    <i className="fa-solid fa-sack-dollar"></i>
                    <h1>25k</h1>
                    <p>Anual gross sale in our site</p>
                </div>
            </section>

            <section className='founder-container'>
                <div className='founder-box'>
                    <img width={200} src={p1} alt='person' />
                    <h3>Tom Cruise</h3>
                    <p>Founder & chariman</p>
                    <div className='icon'>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-linkedin"></i>
                    </div>
                </div>
                <div className='founder-box'>
                    <img width={200} src={p2} alt='person' />
                    <h3>Emma Wetson</h3>
                    <p>Managing Director</p>
                    <div className='icon'>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-linkedin"></i>
                    </div>
                </div>
                <div className='founder-box'>
                    <img width={200} src={p3} alt='person' />
                    <h3>Will Smith</h3>
                    <p>Product Designer</p>
                    <div className='icon'>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-linkedin"></i>
                    </div>
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

export default About