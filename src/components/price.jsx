import React from 'react'
import car1 from '../assets/car1.png'
import car2 from '../assets/car5.png'
import car3 from '../assets/car6.png'
const Price = () => {
  return (
    <div className='flex flex-col  gap-6  w-full p-2 px-4 py-10 lg:px-14 dark:bg-stone-900 dark:text-white' id='pricing'>
      <div  >
        <h2 data-aos="fade-up"  className='text-4xl font-bold'>Lorem, ipsum dolor.</h2>
        <p data-aos="fade-up"  className='text-lg py-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum maxime sit odio!</p>
      </div>
      <div className='grid grid-cols-1 gap-16 md:grid-cols-3 md:gap-3 lg:gap-16'>
        <div data-aos="fade-up"  data-aos-delay="0" className='flex flex-col outline group outline-gray-300  p-3 rounded-lg hover:outline-yellow-400 '>
          <div className='flex text-2xl'>
            <span >12km</span>
            <img src={car1} className='w-40 mx-9  md:mx-3 translate-x-2 group-hover:translate-x-6 duration-700' alt="" />
          </div>
          <div className='text-xl font-bold text-yellow-400'>BMW UX</div>
          <div className='flex justify-between  text-2xl font-normal'>
            <p>$100/Day</p>
            <p>Details</p>
          </div>
        </div>
        <div data-aos="fade-up"  data-aos-delay="500" className='flex flex-col outline group outline-gray-300  p-3 rounded-lg hover:outline-yellow-400 '>
          <div className='flex text-2xl'>
            <span >12km</span>
            <img src={car2} className='w-44 mx-9 translate-x-2 group-hover:translate-x-6 duration-700  lg:w-56 lg:mx-3' alt="" />
          </div>
          <div className='text-xl font-bold text-yellow-400'>KIA UX</div>
          <div className='flex justify-between  text-2xl font-normal'>
            <p>$100/Day</p>
            <p>Details</p>
          </div>
        </div>
        <div data-aos="fade-up"  data-aos-delay="1000" className='flex group flex-col outline  outline-gray-300  p-3 rounded-lg hover:outline-yellow-400'>
          <div className='flex text-2xl'>
            <span >12km</span>
            <img src={car3} className='w-44 mx-9 translate-x-2 group-hover:translate-x-6 duration-700' alt="" />
          </div>
          <div className='text-xl font-bold text-yellow-400'>BMW UX</div>
          <div className='flex justify-between  text-2xl font-normal'>
            <p>$100/Day</p>
            <p>Details</p>
          </div>
        </div>
        
      </div>
      <div className='m-auto md:my-3 md:mx-auto'> <button  data-aos="fade-up" className='   outline border-none text-yellow-400  px-6 py-2 capitalize hover:bg-yellow-400 hover:outline-none hover:border-none hover:text-black rounded'>get started</button></div>
    </div>
  )
}

export default Price