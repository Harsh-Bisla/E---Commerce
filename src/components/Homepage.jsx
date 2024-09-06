import React, { useState } from 'react'
import Hero from "./Hero"
import Products from "./Products"
import Categories from "./Categories"
import NewArrival from "./NewArrival"



function Homepage() {
  const [loading, setLoading] = useState(false)


  return (
    <>
      <Hero loading={loading} setLoading={setLoading} />
      <Products loading={loading} setLoading={setLoading} />
      <Categories />
      <NewArrival />
    </>
  )
}

export default Homepage