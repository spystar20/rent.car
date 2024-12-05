import React, { useEffect } from 'react'

import car1 from '../assets/banner-car.png'

import 'aos/dist/aos.css'
import Aos from 'aos'
import Navbar from './Navbar'
const Home = () => {
  
useEffect(()=>{
Aos.init({duration:2000})
},[])
 
  return (
    <div id='home' className='overflow-hidden  w-full dark:bg-black dark:text-white '>
<Navbar/>
        <div className=' w-auto h-full mt-10 grid  p-6 md:grid-cols-2 md:max-h-[42rem] md:justify-center md:items-center lg:grid-cols-2 lg:mt-20 '>
  <img data-aos="zoom-in" className='w-full md:order-2  lg:order-2' src={car1} alt="" /> 
            <div className='m-auto flex flex-col gap-4 capitalize lg:pl-10 '>
                <h1 data-aos="fade-up" className='text-yellow-400 font-serif text-xl font-semibold lg:text-xl '>effortless</h1>
                <h2 data-aos="fade-up" className=' text-4xl font-bold font-serif lg:text-6xl'>Car Rental

                </h2>
                <p data-aos="fade-up" className=' lg:pr-8 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione veritatis explicabo quibusdam quae reprehenderit ab</p>
              <div  > <button data-aos="fade-up"  className='bg-yellow-400 text-black  mt-4 px-6 py-2 capitalize rounded hover:bg-opacity-85 border-none outline-none'>get started</button></div> 
            </div>
        </div>
    </div>
  )
}

export default Home