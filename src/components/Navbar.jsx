import React, { useContext, useEffect, useState } from 'react'
import moon from '../assets/moon.png'

import user from '../assets/user.png'
import sun from '../assets/brightness .png'

import { RiMenuFill } from "react-icons/ri";
const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(localStorage.theme === "dark");
const toggleDarkMode=()=>{
  let htmlClasses=document.querySelector("html").classList
  if(localStorage.theme==='dark'){
    htmlClasses.remove('dark')
    localStorage.removeItem('theme')
    setIsDarkMode(false);
  }else{
    htmlClasses.add('dark')
    localStorage.setItem('theme','dark')
    setIsDarkMode(true);
  }
}
const [showMobileMenu,setShowMobileMenu]=useState(false)

useEffect(()=>{
if(showMobileMenu){
  document.body.style.overflow='hidden'
}
else{
   document.body.style.overflow='auto'
}
return()=>{
     document.body.style.overflow='auto'
}
},[showMobileMenu])
  return (
 
    <nav >
      <div className='absolute top-0  shadow-2xl w-full px-3 py-3 z-10 text-black dark:text-white bg-white dark:bg-stone-950 '>
        <h1 className='pl-1 font-serif text-3xl capitalize font-bold  lg:4xl lg:pl-7'>car rental</h1>
         <RiMenuFill  onClick={()=>setShowMobileMenu(!showMobileMenu)}   className='text-2xl  cursor-pointer w-7 absolute right-3 top-5 md:hidden lg:hidden' />
        <ul className=' cursor-pointer hidden md:flex flex-row gap-6  text-xl uppercase font-normal absolute  top-5 right-24 lg:text-xl'>
          <li><a className=' hover:text-yellow-400  hover:border-b-2 hover:border-yellow-300 transition-colors duration-500'>home</a></li>
          <li><a className=' hover:text-yellow-400  hover:border-b-2 hover:border-yellow-300 transition-colors duration-500'>cars</a></li>
          <li ><a className=' hover:text-yellow-400  hover:border-b-2 hover:border-yellow-300 transition-colors duration-500'>about</a></li>
          <li> <a className=' hover:text-yellow-400  hover:border-b-2 hover:border-yellow-300 transition-colors duration-500'>booking</a></li>

        </ul>
        <div onClick={toggleDarkMode} className='cursor-pointerw-5 top-6 absolute right-12 '>{isDarkMode?<img src={sun} className='w-5 cursor-pointer' alt="" />:<img src={moon} className='w-5 cursor-pointer' alt="" />}</div>
      </div>
      <div  className={`md:hidden  ${showMobileMenu ?'visible':'hidden'} w-60 h-full dark:bg-neutral-800 dark:text-white z-10   absolute top-0  bg-white pl-9 pt-8`} >
        <div className='flex flex-row gap-3 justify-start m-auto my-6'>
          <div> <img src={user} className='w-10' alt="" /></div>
          <div className='capitalize font-light text-2xl'>hello user</div>
        </div>
        <ul className=' mt-20 flex flex-col text-2xl font-semibold capitalize gap-4'>
         <a href="#home"  onClick={()=>setShowMobileMenu(!showMobileMenu)}   > <li  className='hover:text-yellow-400'>home</li></a>
       <a href="#cars"  onClick={()=>setShowMobileMenu(!showMobileMenu)}   > <li  className='hover:text-yellow-400' >cars</li></a>
       <a href="#about"  onClick={()=>setShowMobileMenu(!showMobileMenu)}   ><li  className='hover:text-yellow-400'>about</li></a>
       <a href="#price"  onClick={()=>setShowMobileMenu(!showMobileMenu)}   > <li  className='hover:text-yellow-400'>pricing</li></a>
      </ul>
    </div>
    </nav>
  )
}

export default Navbar