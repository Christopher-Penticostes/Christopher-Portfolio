import React from 'react'
import viewCV from '../assets/eye.png'
import resume from '../assets/Resume.pdf'

const FloatResume = () => {
  return (
    <div className='max-w-[1550px] mx-auto px-7'>
        <div className='fixed bottom-5 right-7 z-50 flex items-center gap-3'>
            <a href={resume} download="Christopher-Penticostes_Resume.pdf" className='flex items-center justify-center bg-[#2C3E50] h-[35px] w-[165px] rounded-full text-white font-medium text-sm ease-in-out duration-300 hover:bg-[#2ECC71] hover:shadow-lg'>Download CV</a>
            <button onClick={() => window.open(resume, "_blank")} className='flex items-center justify-center bg-white aspect-square w-[35px] rounded-full shadow-[0_0_4px_rgba(0,0,0,0.25)] ease-in-out duration-300 hover:shadow-[0_0_4px_rgba(0,0,0,0.75)]'><img src={viewCV} alt='View CV' className='h-[18px]'/></button>
        </div>
    </div>
  )
}

export default FloatResume
