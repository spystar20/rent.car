import React from 'react'
import '../assets/pattern.jpeg'
import img from '../assets/play_store.png'
import img2 from '../assets/app_store_.png'
const playstore = () => {
  return (
    
        <div className=' px-4 py-16 md:px-14 md:py-20 md:w-full lg:w-full lg:py-10 dark:bg-black'>
     <div  className='rounded-xl  text-center flex flex-col py-1 px-3 md:py-48 gap-8 md:justify-center md:items-center ' style={{backgroundImage:"url('../assets/pattern.jpeg')" , backgroundPosition:"center",backgroundRepeat:"no-repeat",height:"39vh", width:'100%',backgroundSize:"cover"}} >
     <h2  data-aos="fade-up" className='text-2xl mt-9 font-serif text-center font-semibold md:text-4xl lg:text-4xl  md:mt-4 '>Get Started with our app</h2>
     <p  data-aos="fade-up" className='md:text-lg px-2 md:px-24 lg:px-80'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi neque nam sed quia!</p>
     <div  data-aos="fade-up" className='flex flex-row justify-center gap-2'>
        <div><img src={img} className='w-40 md:w-48' alt="" /></div>
       <div> <img src={img2} className='w-40 md:w-48' alt="" /></div>
     </div>
     </div>
    </div>
  )
}

export default playstore