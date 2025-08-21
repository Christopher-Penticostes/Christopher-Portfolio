import React from 'react'
import wordpress from '../assets/WordPress-Based System.png'
import ordering from '../assets/Ordering System.png'
import foodOrdering from '../assets/Food Ordering.png'
import calculator from '../assets/Calculator.png'
import guessnumber from '../assets/Guess Number.png'
import jackandpoy from '../assets/Jack and Poy.png'
import guidance from '../assets/Guidance System.png'
import weather from '../assets/Weather.png'
import crud from '../assets/CRUD.png'
import factorial from '../assets/Factorial.png'
import prime from '../assets/Prime.png'
import fibonacci from '../assets/Fibonacci.png'

const MyProjects = () => {
  return (
    <div className='max-w-[1550px] mx-auto px-7 mb-[70px]'>
      <h1 data-aos="fade-zoom-in" className='text-[36px] font-bold font-roboto-mono uppercase mt-[20px] mb-[45px] text-center'>Projects</h1>
      <div className='grid grid-cols-3 gap-9 max-lg:grid-cols-2 max-md:grid-cols-1'>
        <div data-aos="fade-up" data-aos-duration="600">
          <img src={ordering} alt='Ordering System' className='w-full object-contain shadow-md bg-[#D9D9D9] rounded-xl mb-[17px]'/>
          <p className='text-base font-medium leading-[20px] mb-[17px] text-justify'>Online Ordering System with Product Image to 3D Viewing and Conversion</p>
          <p className='text-[14px] text-justify mb-[17px]'>Developed a full-stack e-commerce platform for our Capstone Project that enables seamless product browsing and ordering, featuring an integrated AI API to convert product images into 3D models. My group and I implemented real-time delivery tracking using Leaflet.js, powered by Server-Sent Events for live updates. We prioritized a user-friendly design and ensured data security for safe online transactions.</p>
          <div className='flex gap-3 flex-wrap'>
            <p className='text-xs font-semibold px-[22px] py-[5px] rounded-full bg-[#F26529]/15 text-[#F26529]'>HTML</p>
            <p className='text-xs font-semibold px-[22px] py-[5px] rounded-full bg-[#663399]/15 text-[#663399]'>CSS</p>
            <p className='text-xs font-semibold px-[22px] py-[5px] rounded-full bg-yellow-500/15 text-yellow-500'>JavaScript</p>
            <p className='text-xs font-semibold px-[22px] py-[5px] rounded-full bg-zinc-600/15 text-zinc-600'>JSON</p>
            <p className='text-xs font-semibold px-[22px] py-[5px] rounded-full bg-indigo-400/15 text-indigo-400'>PHP</p>
            <p className='text-xs font-semibold px-[22px] py-[5px] rounded-full bg-lime-500/15 text-lime-500'>SSE</p>
            <p className='text-xs font-semibold px-[22px] py-[5px] rounded-full bg-[#2174B8]/15 text-[#2174B8]'>MySQL</p>
            <p className='text-xs font-semibold px-[22px] py-[5px] rounded-full bg-sky-800/15 text-sky-800'>Curl</p>
            <p className='text-xs font-semibold px-[22px] py-[5px] rounded-full bg-green-500/15 text-green-500'>LeafletJS</p>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="800">
          <img src={wordpress} alt='WordPress-Based System' className='w-full object-contain shadow-md bg-[#D9D9D9] rounded-xl mb-[17px]'/>
          <p className='text-base font-medium leading-[20px] mb-[17px] text-justify'>WordPress-Based Online Ordering System</p>
          <p className='text-[14px] text-justify mb-[17px]'>Built and customized a WordPress website designed to meet the company’s requirements. My team and I integrated WooCommerce to handle online ordering transactions, enabling customers to browse products, and place orders. We also customized the design for better user experience, ensured mobile responsiveness, and optimized the site for performance and security.</p>
          <div className='flex gap-3 flex-wrap'>
            <p className='text-xs font-semibold px-[22px] py-[5px] rounded-full bg-[#F26529]/15 text-[#F26529]'>HTML</p>
            <p className='text-xs font-semibold px-[22px] py-[5px] rounded-full bg-[#663399]/15 text-[#663399]'>CSS</p>
            <p className='text-xs font-semibold px-[22px] py-[5px] rounded-full bg-yellow-500/15 text-yellow-500'>JavaScript</p>
            <p className='text-xs font-semibold px-[22px] py-[5px] rounded-full bg-[#21759B]/15 text-[#21759B]'>WordPress</p>
            <p className='text-xs font-semibold px-[22px] py-[5px] rounded-full bg-violet-500/15 text-violet-500'>WooCommerce</p>
            <p className='text-xs font-semibold px-[22px] py-[5px] rounded-full bg-red-700/15 text-red-700'>Elementor</p>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000">
          <img src={foodOrdering} alt='Online Food Ordering System' className='w-full object-contain shadow-md bg-[#D9D9D9] rounded-xl mb-[17px]'/>
          <p className='text-base font-medium leading-[20px] mb-[17px] text-justify'>Online Food Ordering System</p>
          <p className='text-[14px] text-justify mb-[17px]'>"Developed an Online Food Ordering System for our school project that allows users to browse menus, place orders, and make payments digitally. The system streamlines the ordering process by providing an easy-to-use interface for customers and an order management dashboard for administrators. It also includes features such as order tracking, notifications, and secure transaction handling.</p>
          <div className='flex gap-3 flex-wrap'>
            <p className='text-xs font-semibold px-[22px] py-[5px] rounded-full bg-[#F26529]/15 text-[#F26529]'>HTML</p>
            <p className='text-xs font-semibold px-[22px] py-[5px] rounded-full bg-[#663399]/15 text-[#663399]'>CSS</p>
            <p className='text-xs font-semibold px-[22px] py-[5px] rounded-full bg-yellow-500/15 text-yellow-500'>JavaScript</p>
            <p className='text-xs font-semibold px-[22px] py-[5px] rounded-full bg-zinc-600/15 text-zinc-600'>JSON</p>
            <p className='text-xs font-semibold px-[22px] py-[5px] rounded-full bg-indigo-400/15 text-indigo-400'>PHP</p>
            <p className='text-xs font-semibold px-[22px] py-[5px] rounded-full bg-[#2174B8]/15 text-[#2174B8]'>MySQL</p>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="1200">
          <img src={guidance} alt='Guidance and Counselling System' className='w-full object-contain shadow-md bg-[#D9D9D9] rounded-xl mb-[17px]'/>
          <p className='text-base font-medium leading-[20px] mb-[17px] text-justify'>Student Guidance and Counseling System</p>
          <p className='text-[14px] text-justify mb-[17px]'>Developed a Guidance and Counseling System for our school project that includes features such as appointment scheduling, announcements, and a mental health assessment test to evaluate students’ well-being. The system aims to provide accessible support for students, improve communication between counselors and learners, and streamline the management of counseling services.</p>
          <div className='flex gap-3 flex-wrap'>
            <p className='text-xs font-semibold px-[22px] py-[5px] rounded-full bg-[#F26529]/15 text-[#F26529]'>HTML</p>
            <p className='text-xs font-semibold px-[22px] py-[5px] rounded-full bg-[#663399]/15 text-[#663399]'>CSS</p>
            <p className='text-xs font-semibold px-[22px] py-[5px] rounded-full bg-yellow-500/15 text-yellow-500'>JavaScript</p>
            <p className='text-xs font-semibold px-[22px] py-[5px] rounded-full bg-zinc-600/15 text-zinc-600'>JSON</p>
            <p className='text-xs font-semibold px-[22px] py-[5px] rounded-full bg-indigo-400/15 text-indigo-400'>PHP</p>
            <p className='text-xs font-semibold px-[22px] py-[5px] rounded-full bg-[#2174B8]/15 text-[#2174B8]'>MySQL</p>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="1400">
          <img src={weather} alt='Weather Temperature Data' className='w-full object-contain shadow-md bg-[#D9D9D9] rounded-xl mb-[17px]'/>
          <p className='text-base font-medium leading-[20px] mb-[17px] text-justify'>City's Weather Temperature Data</p>
          <p className='text-[14px] text-justify mb-[17px]'>Developed a system for an assignment that integrates external APIs into a custom backend application using NestJS. I utilized a free Weather API to fetch and display real-time weather data, handling API requests and responses through the backend.</p>
          <div className='flex gap-3 flex-wrap'>
            <p className='text-xs font-semibold px-[22px] py-[5px] rounded-full bg-[#4DC46F]/15 text-[#4DC46F]'>RESTful API</p>
            <p className='text-xs font-semibold px-[22px] py-[5px] rounded-full bg-yellow-500/15 text-yellow-500'>JavaScript</p>
            <p className='text-xs font-semibold px-[22px] py-[5px] rounded-full bg-sky-500/15 text-sky-500'>TypeScript</p>
            <p className='text-xs font-semibold px-[22px] py-[5px] rounded-full bg-[#8BC500]/15 text-[#8BC500]'>NodeJS</p>
            <p className='text-xs font-semibold px-[22px] py-[5px] rounded-full bg-[#E0234E]/15 text-[#E0234E]'>NestJS</p>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="1600">
          <img src={crud} alt='CRUD' className='w-full object-contain shadow-md bg-[#D9D9D9] rounded-xl mb-[17px]'/>
          <p className='text-base font-medium leading-[20px] mb-[17px] text-justify'>CRUD</p>
          <p className='text-[14px] text-justify mb-[17px]'>Developed a system for an assignment with the goal of implementing full CRUD (Create, Read, Update, Delete) functionality. Through this, I enhanced my understanding of backend logic, database operations, and the importance of data validation and error handling.</p>
          <div className='flex gap-3 flex-wrap'>
            <p className='text-xs font-semibold px-[22px] py-[5px] rounded-full bg-yellow-500/15 text-yellow-500'>JavaScript</p>
            <p className='text-xs font-semibold px-[22px] py-[5px] rounded-full bg-sky-500/15 text-sky-500'>TypeScript</p>
            <p className='text-xs font-semibold px-[22px] py-[5px] rounded-full bg-[#8BC500]/15 text-[#8BC500]'>NodeJS</p>
            <p className='text-xs font-semibold px-[22px] py-[5px] rounded-full bg-[#E0234E]/15 text-[#E0234E]'>NestJS</p>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="1800">
          <img src={fibonacci} alt='Fibonacci Sequence' className='w-full object-contain shadow-md bg-[#D9D9D9] rounded-xl mb-[17px]'/>
          <p className='text-base font-medium leading-[20px] mb-[17px] text-justify'>Fibonacci Sequence</p>
          <p className='text-[14px] text-justify mb-[17px]'>Developed a system that creates an endpoint to return the first n numbers in the Fibonacci sequence. The endpoint accepts a user-defined input for n and dynamically generates the sequence using an optimized algorithm.</p>
          <div className='flex gap-3 flex-wrap'>
            <p className='text-xs font-semibold px-[22px] py-[5px] rounded-full bg-yellow-500/15 text-yellow-500'>JavaScript</p>
            <p className='text-xs font-semibold px-[22px] py-[5px] rounded-full bg-sky-500/15 text-sky-500'>TypeScript</p>
            <p className='text-xs font-semibold px-[22px] py-[5px] rounded-full bg-[#8BC500]/15 text-[#8BC500]'>NodeJS</p>
            <p className='text-xs font-semibold px-[22px] py-[5px] rounded-full bg-[#E0234E]/15 text-[#E0234E]'>NestJS</p>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000">
          <img src={prime} alt='Prime Number' className='w-full object-contain shadow-md bg-[#D9D9D9] rounded-xl mb-[17px]'/>
          <p className='text-base font-medium leading-[20px] mb-[17px] text-justify'>Prime Number</p>
          <p className='text-[14px] text-justify mb-[17px]'>Developed a system that creates an endpoint to check if a given number is prime. The endpoint accepts user input, validates the data, and applies an efficient algorithm to determine primality.</p>
          <div className='flex gap-3 flex-wrap'>
            <p className='text-xs font-semibold px-[22px] py-[5px] rounded-full bg-yellow-500/15 text-yellow-500'>JavaScript</p>
            <p className='text-xs font-semibold px-[22px] py-[5px] rounded-full bg-sky-500/15 text-sky-500'>TypeScript</p>
            <p className='text-xs font-semibold px-[22px] py-[5px] rounded-full bg-[#8BC500]/15 text-[#8BC500]'>NodeJS</p>
            <p className='text-xs font-semibold px-[22px] py-[5px] rounded-full bg-[#E0234E]/15 text-[#E0234E]'>NestJS</p>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="2200">
          <img src={factorial} alt='Factorial Calculator' className='w-full object-contain shadow-md bg-[#D9D9D9] rounded-xl mb-[17px]'/>
          <p className='text-base font-medium leading-[20px] mb-[17px] text-justify'>Factorial Calculator</p>
          <p className='text-[14px] text-justify mb-[17px]'>Developed a system that creates an endpoint to calculate the factorial of a given number. The endpoint takes user input, performs validation, and returns the computed result.</p>
          <div className='flex gap-3 flex-wrap'>
            <p className='text-xs font-semibold px-[22px] py-[5px] rounded-full bg-yellow-500/15 text-yellow-500'>JavaScript</p>
            <p className='text-xs font-semibold px-[22px] py-[5px] rounded-full bg-sky-500/15 text-sky-500'>TypeScript</p>
            <p className='text-xs font-semibold px-[22px] py-[5px] rounded-full bg-[#8BC500]/15 text-[#8BC500]'>NodeJS</p>
            <p className='text-xs font-semibold px-[22px] py-[5px] rounded-full bg-[#E0234E]/15 text-[#E0234E]'>NestJS</p>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="2400">
          <img src={calculator} alt='Calculator' className='w-full object-contain shadow-md bg-[#D9D9D9] rounded-xl mb-[17px]'/>
          <p className='text-base font-medium leading-[20px] mb-[17px] text-justify'>Calculator</p>
          <p className='text-[14px] text-justify mb-[17px]'>Developed a calculator system that performs basic arithmetic operations such as addition, subtraction, multiplication, and division. The project also included input validation to handle errors like division by zero and invalid entries.</p>
          <div className='flex gap-3 flex-wrap'>
            <p className='text-xs font-semibold px-[22px] py-[5px] rounded-full bg-[#F26529]/15 text-[#F26529]'>HTML</p>
            <p className='text-xs font-semibold px-[22px] py-[5px] rounded-full bg-[#663399]/15 text-[#663399]'>CSS</p>
            <p className='text-xs font-semibold px-[22px] py-[5px] rounded-full bg-yellow-500/15 text-yellow-500'>JavaScript</p>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="2600">
          <img src={jackandpoy} alt='Jack and Poy' className='w-full object-contain shadow-md bg-[#D9D9D9] rounded-xl mb-[17px]'/>
          <p className='text-base font-medium leading-[20px] mb-[17px] text-justify'>Jack and Poy</p>
          <p className='text-[14px] text-justify mb-[17px]'>Developed a Rock-Paper-Scissors game using HTML, CSS, and JavaScript. The game allows players to compete against the computer, with results displayed instantly after each round.</p>
          <div className='flex gap-3 flex-wrap'>
            <p className='text-xs font-semibold px-[22px] py-[5px] rounded-full bg-[#F26529]/15 text-[#F26529]'>HTML</p>
            <p className='text-xs font-semibold px-[22px] py-[5px] rounded-full bg-[#663399]/15 text-[#663399]'>CSS</p>
            <p className='text-xs font-semibold px-[22px] py-[5px] rounded-full bg-yellow-500/15 text-yellow-500'>JavaScript</p>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="2800">
          <img src={guessnumber} alt='Guessing Number' className='w-full object-contain shadow-md bg-[#D9D9D9] rounded-xl mb-[17px]'/>
          <p className='text-base font-medium leading-[20px] mb-[17px] text-justify'>Guessing Number</p>
          <p className='text-[14px] text-justify mb-[17px]'>Developed a Number Guessing Game using HTML, CSS, and JavaScript. The game generates a random number within a given range, and players must guess the correct number with feedback provided after each attempt (too high, too low, or correct).</p>
          <div className='flex gap-3 flex-wrap'>
            <p className='text-xs font-semibold px-[22px] py-[5px] rounded-full bg-[#F26529]/15 text-[#F26529]'>HTML</p>
            <p className='text-xs font-semibold px-[22px] py-[5px] rounded-full bg-[#663399]/15 text-[#663399]'>CSS</p>
            <p className='text-xs font-semibold px-[22px] py-[5px] rounded-full bg-yellow-500/15 text-yellow-500'>JavaScript</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyProjects
