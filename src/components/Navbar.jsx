import {IoCloseOutline,IoMenuOutline } from "react-icons/io5";
import fbIcon from '../assets/Facebook-Nav.png'
import linkedinIcon from '../assets/Linkedin-Nav.png'
import emailIcon from '../assets/Email-Nav.png'
import gitIcon from '../assets/Github-Nav.png'
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='flex justify-between items-center h-[73px] max-w-[1550px] mx-auto px-7 sticky top-0 bg-gradient-to-b from-[#FAFAFA] from-15% via-[#FAFAFA]/50 via-65% to-[#FAFAFA]/0 to-90% z-50'>
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
          <NavLink to='/contact' className={({ isActive }) => isActive ? "text-[#2ECC71]" : "hover:text-[#2ECC71]" }>Contact</NavLink>
        </li>
      </ul>
      <ul className='hidden lg:flex w-[33%] justify-end items-center'>
        <li className='mx-2'><img src={fbIcon} alt="Facebook Icon" onClick={() => window.open("https://www.facebook.com/christopher.penticostes/", "_blank")} className='h-[29px] cursor-pointer'/></li>
        <li className='mx-2'><img src={linkedinIcon} alt="LinkedIn Icon" onClick={() => window.open("https://www.linkedin.com/in/christopher-penticostes-6ba49634a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "_blank")} className='h-[29px] cursor-pointer'/></li>
        <li className='mx-2'><img src={emailIcon} alt="Email Icon" onClick={() => window.open("mailto:christopherpenticostes890@gmail.com", "_blank")} className='h-[29px] cursor-pointer'/></li>
        <li className='mx-2'><img src={gitIcon} alt="GitHub Icon" onClick={() => window.open("https://github.com/Christopher-Penticostes", "_blank")} className='h-[29px] cursor-pointer'/></li>
      </ul>
      <div onClick={handleNav} className="block lg:hidden cursor-pointer">
        {!nav ? <IoMenuOutline size={25}/> : <IoCloseOutline size={25} />}
      </div>
      <div className={!nav ? 'fixed left-[-100%] md:block lg:hidden' : 'fixed left-0 top-0 w-[65%] h-full shadow-[0_0_60px_15px_rgba(0,0,0,0.50)] bg-[#FAFAFA] ease-in-out duration-500 md:block lg:hidden'}>
        <div className="px-4 pt-6">
          <Link to='/'><h1 className='text-[20px] font-extrabold uppercase font-montserrat text-[#2ECC71]'>Christopher.</h1></Link>
        </div> 
        <ul className="pt-8 pb-10">
          <li className='p-4'>
            <NavLink to='/' className={({ isActive }) => isActive ? "text-[#2ECC71]" : "hover:text-[#2ECC71]" }>Home</NavLink>
          </li>
          <li className='p-4'>
            <NavLink to='/about' className={({ isActive }) => isActive ? "text-[#2ECC71]" : "hover:text-[#2ECC71]" }>About</NavLink>
          </li>
          <li className='p-4'>
            <NavLink to='/skills' className={({ isActive }) => isActive ? "text-[#2ECC71]" : "hover:text-[#2ECC71]" }>Skills</NavLink>
          </li>
          <li className='p-4'>
            <NavLink to='/projects' className={({ isActive }) => isActive ? "text-[#2ECC71]" : "hover:text-[#2ECC71]" }>Projects</NavLink>
          </li>
          <li className='p-4'>
            <NavLink to='/contact' className={({ isActive }) => isActive ? "text-[#2ECC71]" : "hover:text-[#2ECC71]" }>Contact</NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
