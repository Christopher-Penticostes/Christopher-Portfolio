import React from 'react'
import html from '../assets/HTML.jpg'
import css from '../assets/CSS.png'
import bootstrap from '../assets/Bootstrap.png'
import tailwind from '../assets/Tailwind.png'
import javascript from '../assets/Javascript.png'
import reactjs from '../assets/React.png'
import python from '../assets/Python.png'
import php from '../assets/PHP.png'
import nodejs from '../assets/Node.png'
import nestjs from '../assets/NestJs.png'
import cplus from '../assets/Cplus.png'
import java from '../assets/Java.png'
import mysql from '../assets/MySQL.png'
import mssql from '../assets/MsSQL.jpg'
import git from '../assets/Git.png'
import github from '../assets/GitHub-skills.png'
import rest from '../assets/Rest.png'
import postman from '../assets/Postman.png'
import figma from '../assets/Figma.png'
import cisco from '../assets/Cisco.png'
import wordpress from '../assets/WordPress.png'
import zoho from '../assets/Zoho.jpg'
import linux from '../assets/Linux.png'
import photoshop from '../assets/Photoshop.png'
import canva from '../assets/Canva.png'

const MySkills = () => {
  return (
    <div className='max-w-[1550px] mx-auto px-7 mb-[70px]'>
        <h1 data-aos="fade-zoom-in" className='text-[36px] font-bold font-roboto-mono uppercase mt-[20px] mb-[45px] text-center'>Skills</h1>
        <div data-aos="fade-up" className='w-full shadow-[0_0_4px_1px_rgb(0,0,0,0.15)] rounded-lg'>
            <div className='flex justify-center items-center w-full bg-[#FEFEFE] border-b-[1px] border-black/25 rounded-t-lg h-[43px] relative'>
                <div className='flex gap-[7px] absolute left-4 top-1/2 -translate-y-1/2'>
                    <div className='bg-[#F05953] aspect-square w-[12px] rounded-full'></div>
                    <div className='bg-[#F6BC2D] aspect-square w-[12px] rounded-full'></div>
                    <div className='bg-[#39C640] aspect-square w-[12px] rounded-full'></div>
                </div>
                <p className='text-[15px]'>Technical Skills</p>
            </div>
            <div className='bg-[#F5F5F5] rounded-b-lg px-6 py-5'>
                <p className='text-sm font-medium text-black/50 mb-[10px]'>Front-End Development:</p>
                <div className='flex flex-wrap gap-5'>
                    <div data-aos="zoom-in" data-aos-duration="1100" className='flex items-center justify-between w-[267px] bg-[#F26529]/20 rounded-lg px-[20px] py-[15px] max-lg:w-[48.4%] max-md:w-full'>
                        <div>
                            <p className='text-sm font-medium'>HTML</p>
                            <p className='text-xs text-black/60'>Structuring Web Pages</p>
                        </div>
                        <img src={html} alt='HTML' className='rounded-md h-[40px] w-[40px] object-contain' />
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="1300" className='flex items-center justify-between w-[267px] bg-[#663399]/20 rounded-lg px-[20px] py-[15px] max-lg:w-[48.4%] max-md:w-full'>
                        <div>
                            <p className='text-sm font-medium'>CSS</p>
                            <p className='text-xs text-black/60'>Styling Web Pages</p>
                        </div>
                        <img src={css} alt='CSS' className='rounded-md h-[40px] w-[40px] object-contain' />
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="1500" className='flex items-center justify-between w-[267px] bg-[#6D11F4]/20 rounded-lg px-[20px] py-[15px] max-lg:w-[48.4%] max-md:w-full'>
                        <div>
                            <p className='text-sm font-medium'>Bootstrap</p>
                            <p className='text-xs text-black/60'>CSS Framework</p>
                        </div>
                        <img src={bootstrap} alt='Bootstrap' className='rounded-md h-[40px] w-[40px] object-contain' />
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="1700" className='flex items-center justify-between w-[267px] bg-[#16BECB]/20 rounded-lg px-[20px] py-[15px] max-lg:w-[48.4%] max-md:w-full'>
                        <div>
                            <p className='text-sm font-medium'>Tailwind CSS</p>
                            <p className='text-xs text-black/60'>CSS Framework</p>
                        </div>
                        <img src={tailwind} alt='Tailwind CSS' className='rounded-md h-[40px] w-[40px] object-contain' />
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="1900" className='flex items-center justify-between w-[267px] bg-[#F7DF1E]/20 rounded-lg px-[20px] py-[15px] max-lg:w-[48.4%] max-md:w-full'>
                        <div>
                            <p className='text-sm font-medium'>JavaScript</p>
                            <p className='text-xs text-black/60'>Adding Interactivity</p>
                        </div>
                        <img src={javascript} alt='JavaScript' className='rounded-md h-[40px] w-[40px] object-contain' />
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="2100" className='flex items-center justify-between w-[267px] bg-[#60DAFA]/20 rounded-lg px-[20px] py-[15px] max-lg:w-[48.4%] max-md:w-full'>
                        <div>
                            <p className='text-sm font-medium'>ReactJS</p>
                            <p className='text-xs text-black/60'>JavaScript Library</p>
                        </div>
                        <img src={reactjs} alt='ReactJS' className='rounded-md h-[40px] w-[40px] object-contain' />
                    </div>
                </div>
                <p className='text-sm font-medium text-black/50 mb-[10px] mt-[25px]'>Back-End Development:</p>
                <div className='flex flex-wrap gap-5'>
                    <div data-aos="zoom-in" data-aos-duration="1100" className='flex items-center justify-between w-[267px] bg-[#3774A8]/20 rounded-lg px-[20px] py-[15px] max-lg:w-[48.4%] max-md:w-full'>
                        <div>
                            <p className='text-sm font-medium'>Python</p>
                            <p className='text-xs text-black/60'>Programming Language</p>
                        </div>
                        <img src={python} alt='Python' className='rounded-md h-[40px] w-[40px] object-contain' />
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="1300" className='flex items-center justify-between w-[267px] bg-[#777BB3]/20 rounded-lg px-[20px] py-[15px] max-lg:w-[48.4%] max-md:w-full'>
                        <div>
                            <p className='text-sm font-medium'>PHP</p>
                            <p className='text-xs text-black/60'>Scripting Language</p>
                        </div>
                        <img src={php} alt='PHP' className='rounded-md h-[40px] w-[40px] object-contain' />
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="1500" className='flex items-center justify-between w-[267px] bg-[#8BC500]/20 rounded-lg px-[20px] py-[15px] max-lg:w-[48.4%] max-md:w-full'>
                        <div>
                            <p className='text-sm font-medium'>NodeJS</p>
                            <p className='text-xs text-black/60'>Runtime Environment</p>
                        </div>
                        <img src={nodejs} alt='NodeJS' className='rounded-md h-[40px] w-[40px] object-contain' />
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="1700" className='flex items-center justify-between w-[267px] bg-[#E0234E]/20 rounded-lg px-[20px] py-[15px] max-lg:w-[48.4%] max-md:w-full'>
                        <div>
                            <p className='text-sm font-medium'>NestJS</p>
                            <p className='text-xs text-black/60'>JavaScript Framework</p>
                        </div>
                        <img src={nestjs} alt='NestJS' className='rounded-md h-[40px] w-[40px] object-contain' />
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="1900" className='flex items-center justify-between w-[267px] bg-[#777BB3]/20 rounded-lg px-[20px] py-[15px] max-lg:w-[48.4%] max-md:w-full'>
                        <div>
                            <p className='text-sm font-medium'>C++</p>
                            <p className='text-xs text-black/60'>Programming Language</p>
                        </div>
                        <img src={cplus} alt='C++' className='rounded-md h-[40px] w-[40px] object-contain' />
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="2100" className='flex items-center justify-between w-[267px] bg-[#010101]/20 rounded-lg px-[20px] py-[15px] max-lg:w-[48.4%] max-md:w-full'>
                        <div>
                            <p className='text-sm font-medium'>Java</p>
                            <p className='text-xs text-black/60'>Programming Language</p>
                        </div>
                        <img src={java} alt='Java' className='rounded-md h-[40px] w-[40px] object-contain' />
                    </div>
                </div>
                <p className='text-sm font-medium text-black/50 mb-[10px] mt-[25px]'>Database Management:</p>
                <div className='flex flex-wrap gap-5'>
                    <div data-aos="zoom-in" data-aos-duration="1100" className='flex items-center justify-between w-[267px] bg-[#83BDE0]/20 rounded-lg px-[20px] py-[15px] max-lg:w-[48.4%] max-md:w-full'>
                        <div>
                            <p className='text-sm font-medium'>MySQL</p>
                            <p className='text-xs text-black/60'>Relational Database</p>
                        </div>
                        <img src={mysql} alt='MySQL' className='rounded-md h-[40px] w-[40px] object-contain' />
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="1300" className='flex items-center justify-between w-[267px] bg-[#2174B8]/20 rounded-lg px-[20px] py-[15px] max-lg:w-[48.4%] max-md:w-full'>
                        <div>
                            <p className='text-sm font-medium'>Microsoft SQL Server</p>
                            <p className='text-xs text-black/60'>Relational Database</p>
                        </div>
                        <img src={mssql} alt='Microsoft SQL' className='rounded-md h-[40px] w-[40px] object-contain' />
                    </div>
                </div>
                <p className='text-sm font-medium text-black/50 mb-[10px] mt-[25px]'>Version Control:</p>
                <div className='flex flex-wrap gap-5'>
                    <div data-aos="zoom-in" data-aos-duration="1100" className='flex items-center justify-between w-[267px] bg-[#F05033]/20 rounded-lg px-[20px] py-[15px] max-lg:w-[48.4%] max-md:w-full'>
                        <div>
                            <p className='text-sm font-medium'>Git</p>
                            <p className='text-xs text-black/60'>Version Control System</p>
                        </div>
                        <img src={git} alt='Git' className='rounded-md h-[40px] w-[40px] object-contain' />
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="1300" className='flex items-center justify-between w-[267px] bg-[#1B1F23]/20 rounded-lg px-[20px] py-[15px] max-lg:w-[48.4%] max-md:w-full'>
                        <div>
                            <p className='text-sm font-medium'>GitHub</p>
                            <p className='text-xs text-black/60'>Managing Git Repositories</p>
                        </div>
                        <img src={github} alt='Git' className='rounded-md h-[40px] w-[40px] object-contain' />
                    </div>
                </div>
                <p className='text-sm font-medium text-black/50 mb-[10px] mt-[25px]'>Other Tools:</p>
                <div className='flex flex-wrap gap-5'>
                    <div data-aos="zoom-in" data-aos-duration="1100" className='flex items-center justify-between w-[267px] bg-[#4DC46F]/20 rounded-lg px-[20px] py-[15px] max-lg:w-[48.4%] max-md:w-full'>
                        <div>
                            <p className='text-sm font-medium'>RESTful APIs</p>
                            <p className='text-xs text-black/60'>System Intergration Tool</p>
                        </div>
                        <img src={rest} alt='RESTful APIs' className='rounded-md h-[40px] w-[40px] object-contain' />
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="1300" className='flex items-center justify-between w-[267px] bg-[#F26933]/20 rounded-lg px-[20px] py-[15px] max-lg:w-[48.4%] max-md:w-full'>
                        <div>
                            <p className='text-sm font-medium'>Postman</p>
                            <p className='text-xs text-black/60'>API Testing Tool</p>
                        </div>
                        <img src={postman} alt='Postman' className='rounded-md h-[40px] w-[40px] object-contain' />
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="1500" className='flex items-center justify-between w-[267px] bg-[#03011C]/20 rounded-lg px-[20px] py-[15px] max-lg:w-[48.4%] max-md:w-full'>
                        <div>
                            <p className='text-sm font-medium'>Figma</p>
                            <p className='text-xs text-black/60'>UI Design Tool</p>
                        </div>
                        <img src={figma} alt='Figma' className='rounded-md h-[40px] w-[40px]' />
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="1700" className='flex items-center justify-between w-[267px] bg-[#ECCA6F]/20 rounded-lg px-[20px] py-[15px] max-lg:w-[48.4%] max-md:w-full'>
                        <div>
                            <p className='text-sm font-medium'>Cisco Packet Tracer</p>
                            <p className='text-xs text-black/60'>Network Simulation Software</p>
                        </div>
                        <img src={cisco} alt='Cisco Packet Tracer' className='rounded-md h-[40px] w-[40px] object-contain' />
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="1900" className='flex items-center justify-between w-[267px] bg-[#21759B]/20 rounded-lg px-[20px] py-[15px] max-lg:w-[48.4%] max-md:w-full'>
                        <div>
                            <p className='text-sm font-medium'>WordPress</p>
                            <p className='text-xs text-black/60'>Website Building Platform</p>
                        </div>
                        <img src={wordpress} alt='WordPress' className='rounded-md h-[40px] w-[40px] object-contain' />
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="2100" className='flex items-center justify-between w-[267px] bg-[#FFAA01]/20 rounded-lg px-[20px] py-[15px] max-lg:w-[48.4%] max-md:w-full'>
                        <div>
                            <p className='text-sm font-medium'>ZOHO Sites</p>
                            <p className='text-xs text-black/60'>Website Builder Tool</p>
                        </div>
                        <img src={zoho} alt='ZOHO Sites' className='rounded-md h-[40px] w-[40px] object-contain' />
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="2300" className='flex items-center justify-between w-[267px] bg-[#01A1EE]/20 rounded-lg px-[20px] py-[15px] max-lg:w-[48.4%] max-md:w-full'>
                        <div>
                            <p className='text-sm font-medium'>Linux</p>
                            <p className='text-xs text-black/60'>Secure Flaxible OS</p>
                        </div>
                        <img src={linux} alt='Linux' className='rounded-md h-[40px] w-[40px] object-contain' />
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="2500" className='flex items-center justify-between w-[267px] bg-[#31A8FF]/20 rounded-lg px-[20px] py-[15px] max-lg:w-[48.4%] max-md:w-full'>
                        <div>
                            <p className='text-sm font-medium'>Photoshop</p>
                            <p className='text-xs text-black/60'>Image Editing Software</p>
                        </div>
                        <img src={photoshop} alt='Photoshop' className='rounded-md h-[40px] w-[40px] object-contain' />
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="2700" className='flex items-center justify-between w-[267px] bg-[#4D46F4]/20 rounded-lg px-[20px] py-[15px] max-lg:w-[48.4%] max-md:w-full'>
                        <div>
                            <p className='text-sm font-medium'>Canva</p>
                            <p className='text-xs text-black/60'>Gaphic Design Tool</p>
                        </div>
                        <img src={canva} alt='Canva' className='rounded-md h-[40px] w-[40px] object-contain' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MySkills
