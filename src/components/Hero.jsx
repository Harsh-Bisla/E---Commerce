import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { categorySliceActions } from '../store'
import Slider from './Slider'
import Loader from "../components/Loader"
import { useOutletContext } from 'react-router-dom'



function Hero({ loading }) {
  const [category, setCategory] = useState("")
  const [activeCategory, setActiveCategory] = useState("")

  const { alert } = useOutletContext()

  const scrollRef = useRef(null)


  const dispatch = useDispatch()

  let url = "https://dummyjson.com/products/category-list"

  useEffect(() => {
    fetch(url)
      .then((res) => {
        res.json().then((data) => {
          setCategory(data)
        })
      })
  }, [])

  const handleMouseScroll = (e) => {
    e.preventDefault()
    scrollRef.current.scrollLeft += e.deltaY
  }

  const handleFilteredProducts = (category) => {
    setActiveCategory(category)
    dispatch(categorySliceActions.updatecategory(category))
    alert(`Showing Products for ${category}`, "colored")
  }
  return (
    <>
      <section className='hero'>
        <div className='left'>
          <ul>
            {Array.from(category).map((category) =>
              <li className={activeCategory === category ? 'active-category' : ''} key={category} onClick={() => handleFilteredProducts(category)} onWheel={handleMouseScroll} >{category.charAt(0).toUpperCase() + category.slice(1)}</li>
            )}
          </ul>
        </div>

        <div className='right'>
          {loading == true ? <Loader /> :
            <Slider />}
        </div>
      </section>
    </>
  )
}

export default Hero