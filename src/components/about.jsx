import React from 'react'
import  car from '../assets/car1.png'

const About = () => {
  return (
    <div className='w-full text-black dark:text-white lg:px-10  bg-light-second dark:bg-dark-first' id='about'>
        <div  className='w-full grid grid-cols-1 min-h-[600px]  items-center p-2 md:grid-cols-2 md:gap-5 lg:px-10 lg:grid-cols-2  lg:gap-16'>
<img data-aos="slide-right" className='p-2' src={car} alt="" />
<div className='grid grid-cols-1 gap-4 p-2 md:p-6 '>
    <h2 data-aos="fade-up" className='text-3xl font-bold'>About us</h2>
    <p data-aos="fade-up" className='text-lg font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil tempore atque ut doloremque est.</p>
<p data-aos="fade-up" className='text-lg font-light'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, ratione.</p>
<div><button data-aos="fade-up" className='   outline border-none text-yellow-400  px-6 py-2 capitalize hover:bg-yellow-400 hover:outline-none hover:border-none hover:text-black rounded'>get started</button></div>
</div>

    </div>
    </div>
  )
}

export default About