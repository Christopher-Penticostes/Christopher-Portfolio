import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'

const Home = () => {
  return (
    <div className='lg:h-[100dvh] lg:overflow-hidden'>
      <Navbar />
      <Hero />
    </div>
  )
}

export default Home
