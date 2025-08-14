import React from 'react'
import Navbar from '../components/Navbar'
import Aboutme from '../components/Aboutme'
import FloatResume from '../components/FloatResume'

const About = () => {
  return (
    <div className='lg:h-[100dvh] lg:overflow-hidden'>
      <Navbar />
      <Aboutme />
      <FloatResume />
    </div>
  )
}

export default About
