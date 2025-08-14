import React from 'react'
import myPhoto from '../assets/myphoto.jpg'
import viewCV from '../assets/eye.png'
import facebook from '../assets/facebook.png'
import linkedin from '../assets/linkedin.png'
import gmail from '../assets/gmail.png'
import github from '../assets/github.png'
import resume from '../assets/Resume.pdf'
import { ReactTyped } from "react-typed"

const Hero = () => {
  return (
    <div className='flex justify-center items-center lg:h-[calc(100dvh-10vh)] max-w-[1550px] mx-auto px-7'>
        <div className='flex gap-[95px] max-lg:flex-col max-md:gap-[55px] max-sm:mb-[30px]'>
            <div data-aos="fade-right" className='flex items-center max-lg:justify-center max-lg:mt-[80px] max-md:mt-[50px]'>
                <img src={myPhoto} alt="Christopher" className='rounded-full object-cover object-[50%_20%] aspect-square w-[419px] max-md:w-[419px] max-sm:w-[240px]'/>
            </div>
            <div data-aos="fade-left" className='flex justify-center flex-col max-lg:items-center'>
                <div className='flex items-center gap-[6px] mb-[15px] max-md:mb-[5px]'>
                    <p className='font-medium text-[22px] text-[#4F4F4F] font-roboto-condensed max-md:text-[16px]'>Hi! I'm </p>
                    <ReactTyped strings={['A Tech Enthusiast', 'An Aspiring Web Developer']} typeSpeed={120} backSpeed={140} loop className='font-medium text-[22px] bg-gradient-to-l from-lime-500 to-emerald-400 bg-clip-text text-transparent font-roboto-condensed max-md:text-[16px]' />
                </div>
                <p className='text-4xl font-bold font-roboto-mono mb-[40px] max-md:text-[18px]'>Christopher R. Penticostes</p>
                <p className='text-sm w-[40vw] text-[#545454] leading-[26px] mb-[30px] max-lg:w-[80vw] max-lg:text-center'>Passionate Full Stack Web Developer with strong academic and internship experience in modern web technologies | Eager to learn and grow in tech</p>
                <div className='flex gap-[21px] mb-[32px]'>
                    <a href={resume} download="Christopher-Penticostes_Resume.pdf" className='flex items-center justify-center bg-[#2C3E50] h-[53px] w-[216px] text-white rounded-[5px] font-medium text-lg ease-in-out duration-300 hover:bg-[#2ECC71] hover:shadow-lg'>Download CV</a>
                    <button onClick={() => window.open(resume, "_blank")} className='flex items-center justify-center bg-white h-[53px] w-[53px] rounded-[5px] shadow-[0_0_4px_rgba(0,0,0,0.25)] ease-in-out duration-300 hover:shadow-[0_0_4px_rgba(0,0,0,0.75)]'><img src={viewCV} alt='View CV' className='h-[21px]'/></button>
                </div>
                <div className='flex gap-[18px]'>
                    <img src={facebook} alt='Facebook' className='h-[25px] cursor-pointer' onClick={() => window.open("https://www.facebook.com/christopher.penticostes/", "_blank")} />
                    <img src={linkedin} alt='Facebook' className='h-[25px] cursor-pointer' onClick={() => window.open("https://www.linkedin.com/in/christopher-penticostes-6ba49634a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "_blank")} />
                    <img src={gmail} alt='Facebook' className='h-[25px] cursor-pointer' onClick={() => window.open("mailto:christopherpenticostes890@gmail.com", "_blank")} />
                    <img src={github} alt='Facebook' className='h-[25px] cursor-pointer' onClick={() => window.open("https://github.com/Christopher-Penticostes", "_blank")} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
