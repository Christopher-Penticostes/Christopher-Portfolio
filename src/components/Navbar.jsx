import {IoCloseOutline,IoMenuOutline } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import fbIcon from '../assets/Facebook-Nav.png'
import linkedinIcon from '../assets/Linkedin-Nav.png'
import emailIcon from '../assets/Email-Nav.png'
import gitIcon from '../assets/Github-Nav.png'
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ModalContact from "./ModalContact"
import myPhoto from '../assets/myphoto.jpg'
import { MdCall } from "react-icons/md";

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [open, setOpen] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <>
      <div className='flex justify-between items-center h-[73px] max-w-[1550px] mx-auto px-7 sticky top-0 bg-gradient-to-b from-[#FAFAFA] from-50% via-[#FAFAFA]/85 via-75% to-[#FAFAFA]/10 to-100% z-40'>
        <div className="w-[33%]">
          <Link to='/'><h1 className='text-2xl font-extrabold uppercase font-montserrat text-[#2ECC71]'>Christopher.</h1></Link>
        </div> 
        <ul className='hidden lg:flex w-[33%] justify-center items-center text-[15px] font-medium font-poppins text-[#2C3E50]'>
          <li className='mx-7 cursor-pointer'>
            <NavLink to='/' className={({ isActive }) => isActive ? "text-[#2ECC71]" : "hover:text-[#2ECC71]" }>Home</NavLink>
          </li>
          <li className='mx-7 cursor-pointer'>
            <NavLink to='/about' className={({ isActive }) => isActive ? "text-[#2ECC71]" : "hover:text-[#2ECC71]" }>About</NavLink>
          </li>
          <li className='mx-7 cursor-pointer'>
            <NavLink to='/skills' className={({ isActive }) => isActive ? "text-[#2ECC71]" : "hover:text-[#2ECC71]" }>Skills</NavLink>
          </li>
          <li className='mx-7 cursor-pointer'>
            <NavLink to='/projects' className={({ isActive }) => isActive ? "text-[#2ECC71]" : "hover:text-[#2ECC71]" }>Projects</NavLink>
          </li>
          <li className='mx-7 cursor-pointer'>
            <button onClick={() => setOpen(true)} className="hover:text-[#2ECC71]">Contact</button>
          </li>
        </ul>
        <ul className='hidden lg:flex w-[33%] justify-end items-center'>
          <li className='mx-2'><img src={fbIcon} alt="Facebook Icon" onClick={() => window.open("https://www.facebook.com/christopher.penticostes/", "_blank")} className='h-[29px] cursor-pointer'/></li>
          <li className='mx-2'><img src={linkedinIcon} alt="LinkedIn Icon" onClick={() => window.open("https://www.linkedin.com/in/christopher-penticostes-6ba49634a", "_blank")} className='h-[29px] cursor-pointer'/></li>
          <li className='mx-2'><img src={emailIcon} alt="Email Icon" onClick={() => window.open("mailto:christopherpenticostes890@gmail.com", "_blank")} className='h-[29px] cursor-pointer'/></li>
          <li className='mx-2'><img src={gitIcon} alt="GitHub Icon" onClick={() => window.open("https://github.com/Christopher-Penticostes", "_blank")} className='h-[29px] cursor-pointer'/></li>
        </ul>
        <div onClick={handleNav} className="block lg:hidden cursor-pointer">
          {!nav ? <IoMenuOutline size={25}/> : <IoCloseOutline size={25} />}
        </div>
        <div onClick={() => setNav(false)} className={`fixed inset-0 z-30 lg:hidden transition-opacity duration-500 ${nav ? "bg-black/40 opacity-100 visible" : "bg-black/0 opacity-0 invisible"}`}>
          <div onClick={(e) => e.stopPropagation()} className={`fixed top-0 left-0 w-[65%] h-full bg-[#FAFAFA] shadow-[0_0_60px_15px_rgba(0,0,0,0.50)] transform transition-transform duration-500 ease-in-out z-40 ${nav ? "translate-x-0" : "-translate-x-full"}`}>
            <div className="px-7 pt-6">
              <Link to='/'><h1 className='text-[20px] font-extrabold uppercase font-montserrat text-[#2ECC71]'>Christopher.</h1></Link>
            </div>
            <ul className="pt-8 pb-10">
              <li className='px-7 py-5'>
                <NavLink to='/' className={({ isActive }) => isActive ? "text-[#2ECC71]" : "hover:text-[#2ECC71]" }>Home</NavLink>
              </li>
              <li className='px-7 py-5'>
                <NavLink to='/about' className={({ isActive }) => isActive ? "text-[#2ECC71]" : "hover:text-[#2ECC71]" }>About</NavLink>
              </li>
              <li className='px-7 py-5'>
                <NavLink to='/skills' className={({ isActive }) => isActive ? "text-[#2ECC71]" : "hover:text-[#2ECC71]" }>Skills</NavLink>
              </li>
              <li className='px-7 py-5'>
                <NavLink to='/projects' className={({ isActive }) => isActive ? "text-[#2ECC71]" : "hover:text-[#2ECC71]" }>Projects</NavLink>
              </li>
              <li className='px-7 py-5'>
                <button 
                  onClick={() => { setOpen(true); setNav(false) }} 
                  className="hover:text-[#2ECC71]"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <ModalContact open={open} onClose={() => setOpen(false)} className="">
        <div className="flex gap-[2%] w-[790px] max-lg:flex-col max-lg:w-[500px] max-lg:gap-[20px] max-md:w-[270px]">
          <div className="flex flex-col items-center w-[49%] bg-[#35495C]/10 border-[1px] border-[#35495C]/30 rounded-md p-4 ease-in-out duration-300 max-lg:w-full hover:border-[#35495C]/90 hover:shadow-xl">
            <p className="text-lg font-medium mb-[24px] max-md:text-base max-md:mb-[14px]">LinkedIn Profile</p>
            <img src={myPhoto} alt="Christopher" className='rounded-full object-cover object-[50%_20%] aspect-square w-[125px] mb-[22px] max-md:w-[80px] max-md:mb-[12px]'/>
            <p className="text-base font-medium mb-[9px] max-md:text-[14px]">Christopher Penticostes</p>
            <p className="text-[14px] text-black/70 text-center w-[80%] leading-[18px] mb-[54px] max-md:text-[12px] max-md:mb-[18px]">IT Graduate | Aspiring Web Developer | Eager to Learn and Grow in Tech</p>
            <button className="h-[34px] w-[166px] rounded-full bg-[#2C3E50] text-white text-[15px] cursor-pointer ease-in-out duration-300 hover:bg-[#2ECC71]" onClick={() => window.open("https://www.linkedin.com/in/christopher-penticostes-6ba49634a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "_blank")}>View Profile</button>
          </div>
          <div onClick={() => window.open("mailto:christopherpenticostes890@gmail.com")} className="flex flex-col gap-[4%] w-[49%] max-lg:w-full max-lg:gap-[20px] cursor-pointer">
            <div className="flex flex-col justify-center items-center h-[48%] bg-[#35495C]/10 border-[1px] border-[#35495C]/30 rounded-md p-4 ease-in-out duration-300 hover:border-[#35495C]/90 hover:shadow-xl">
              <IoIosMail size={35} className="text-[#2C3E50] mb-[14px] max-md:h-[25px] max-lg:mb-[8px]"/>
              <p className="text-base font-medium mb-[9px] max-md:text-[14px]">Email</p>
              <p className="text-[14px] text-black/70 max-md:text-[12px]">christopherpenticostes890@gmail.com</p>
            </div>
            <div onClick={() => window.open("tel:+639360670157")} className="flex flex-col justify-center items-center h-[48%] bg-[#35495C]/10 border-[1px] border-[#35495C]/30 rounded-md p-4 ease-in-out duration-300 hover:border-[#35495C]/90 hover:shadow-xl">
              <MdCall size={35} className="text-[#2C3E50] mb-[14px] max-md:h-[25px] max-lg:mb-[8px]"/>
              <p className="text-base font-medium mb-[9px] max-md:text-[14px]">Phone</p>
              <p className="text-[14px] text-black/70 max-md:text-[12px]">+63 936 067 0157</p>
            </div>
          </div>
        </div>
      </ModalContact>
    </>
  )
}

export default Navbar
