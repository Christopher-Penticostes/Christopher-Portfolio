import {IoCloseOutline,IoMenuOutline } from "react-icons/io5";
import fbIcon from './Image/Facebook-Nav.png'
import linkedinIcon from './Image/Linkedin-Nav.png'
import emailIcon from './Image/Email-Nav.png'
import gitIcon from './Image/Github-Nav.png'
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='flex justify-between items-center h-[70px] max-w-[1550px] mx-auto px-7'> 
      <h1 className='w-[33%] text-2xl font-extrabold uppercase font-montserrat text-[#2ECC71]'>Christopher.</h1>
      <ul className='hidden lg:flex w-[33%] justify-center items-center text-[15px] font-medium font-poppins text-[#2C3E50]'>
        <li className='mx-7 cursor-pointer hover:text-[#2ECC71]'>Home</li>
        <li className='mx-7 cursor-pointer hover:text-[#2ECC71]'>About</li>
        <li className='mx-7 cursor-pointer hover:text-[#2ECC71]'>Skills</li>
        <li className='mx-7 cursor-pointer hover:text-[#2ECC71]'>Projects</li>
        <li className='mx-7 cursor-pointer hover:text-[#2ECC71]'>Contact</li>
      </ul>
      <ul className='hidden lg:flex w-[33%] justify-end items-center'>
        <li className='mx-2'><img src={fbIcon} alt="Facebook Icon" className='h-[29px]'/></li>
        <li className='mx-2'><img src={linkedinIcon} alt="Facebook Icon" className='h-[29px]'/></li>
        <li className='mx-2'><img src={emailIcon} alt="Facebook Icon" className='h-[29px]'/></li>
        <li className='mx-2'><img src={gitIcon} alt="Facebook Icon" className='h-[29px]'/></li>
      </ul>
      <div onClick={handleNav} className="block lg:hidden cursor-pointer">
        {!nav ? <IoMenuOutline size={25}/> : <IoCloseOutline size={25} />}
      </div>
      <div className={!nav ? 'fixed left-[-100%] lg:block xl:hidden' : 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500 lg:block xl:hidden'}>
        <ul className="pt-24">
          <li className='p-4 cursor-pointer hover:text-[#2ECC71]'>Home</li>
          <li className='p-4 cursor-pointer hover:text-[#2ECC71]'>About</li>
          <li className='p-4 cursor-pointer hover:text-[#2ECC71]'>Skills</li>
          <li className='p-4 cursor-pointer hover:text-[#2ECC71]'>Projects</li>
          <li className='p-4 cursor-pointer hover:text-[#2ECC71]'>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
