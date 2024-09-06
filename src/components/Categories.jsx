import React from 'react'
import Phone from "../assets/Phone.png"
import Slider from "../components/Slider"
function Categories() {
    return (
        <>
            <section className='categories-wrapper'>
                <div className='today'>
                    <div className='box'></div>
                    <h3>Categories</h3>
                </div>
                <h1>Browse By Category</h1>
                <div className='btns'>
                    <i className="fa-solid fa-arrow-left"></i>
                    <i className="fa-solid fa-arrow-right"></i>
                </div>
                <div className='category-container'>
                    <div className='c-card'>
                        <img src={Phone} alt='phone' />
                        <p>Phones</p>
                    </div>

                    <div className='c-card'>
                        <img src={Phone} alt='phone' />
                        <p>Phones</p>
                    </div>

                    <div className='c-card'>
                        <img src={Phone} alt='phone' />
                        <p>Phones</p>
                    </div>

                    <div className='c-card'>
                        <img src={Phone} alt='phone' />
                        <p>Phones</p>
                    </div>

                    <div className='c-card'>
                        <img src={Phone} alt='phone' />
                        <p>Phones</p>
                    </div>
                </div>
            </section>
            <div className='seperator'></div>
            <section className='category-bg-image'>
                <Slider />
            </section>
        </>
    )
}

export default Categories