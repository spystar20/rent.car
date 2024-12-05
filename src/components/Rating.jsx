import React from 'react'
import img from '../assets/rater.jpg'
const Rating = () => {
  return (
    <div className='flex flex-col w-auto  p-5  gap-10 py-40 lg:px-14 dark:bg-black dark:text-white'>
<div className='text-center p-3 mt-10'>
    <h1 data-aos="fade-up"   className='font-serif text-3xl font-bold'>What Our Clients Say About Us</h1>
    <p  data-aos="fade-up" className='p-3 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
</div>
<div data-aos="fade-up"  data-aos-delay="0" className='flex flex-col gap-9 md:flex-row lg:gap-7' >
<div className='flex flex-col p-4 rounded-xl gap-3 items-center dark:bg-zinc-800 w-auto bg-gray-100 lg:py-11 lg:px-7'>
    <img src={img} className='w-20 rounded-full filter  ' alt="" />
    <p className='text-2xl'>⭐⭐⭐⭐⭐</p>
    <p className='text-lg text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
    <p className='font-medium text-lg'>Dilshad</p>
</div>
<div data-aos="fade-up"  data-aos-delay="500" className='flex flex-col p-4 rounded-xl gap-3 items-center w-auto dark:bg-zinc-800 bg-gray-100 lg:py-11 lg:px-7'>
    <img src={img} className='w-20 rounded-full' alt="" />
    <p className='text-2xl'>⭐⭐⭐⭐⭐</p>
    <p className='text-lg text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
    <p className='font-medium text-lg'>Dil</p>
</div>
<div data-aos="fade-up"  data-aos-delay="1000" className='flex flex-col p-4 rounded-xl gap-3 items-center w-auto dark:bg-zinc-800 bg-gray-100 lg:py-11 lg:px-7'>
    <img src={img} className='w-20 rounded-full' alt="" />
    <p className='text-2xl'>⭐⭐⭐⭐⭐</p>
    <p className='text-lg text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
    <p className='font-medium text-lg'>shad</p>
</div>
</div>
    </div>
  )
}

export default Rating