import React from 'react'
import { FaCameraRetro } from "react-icons/fa";
import { FaHandshakeSimple } from "react-icons/fa6";
import { FaAddressCard } from "react-icons/fa";
const Page3 = () => {
    return (
        <div className='grid grid-cols-1  gap-6 justify-center p-3 py-14 md:py-28 w-full lg:px-14 dark:bg-black dark:text-white' id='cars'>
            <h1 className='m-auto text-3xl font-bold lg:text-4xl font-serif'>Why Choose Us</h1>
            <div className='grid grid-cols-1 mt-11 md:grid-cols-3 lg:grid-cols-3 lg:gap-4'>
                <div data-aos="fade-up" data-aos-delay="0" className='container group text-white hover:text-black bg-black hover:bg-yellow-400 flex flex-col  justify-center items-center p-2 rounded-lg md:p-11

                 '>
                    <div className='text-yellow-400 group-hover:text-black'><FaCameraRetro className='text-5xl' />
                    </div>
                    <h2 className=' m-auto p-4 text-xl'>Best Price</h2>
                    <p className=' text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    <p className=' m-2'>Learn More</p>
                </div>
                <div data-aos="fade-up" data-aos-delay="500" className='container group text-white hover:text-black  hover:bg-yellow-400 flex flex-col  justify-center items-center p-2 rounded-lg bg-black md:p-11'>
                    <div className='text-yellow-400 group-hover:text-black'>   <FaAddressCard className='text-5xl' /></div>
                    <h2 className=' m-auto p-4 text-xl'>Fast and Safe</h2>
                    <p className=' text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    <p className=' m-2'>Learn More</p>
                </div>
                <div data-aos="fade-up"  data-aos-delay="1000" className=' md:text-center container group text-white hover:text-black  hover:bg-yellow-400 flex flex-col  justify-center items-center p-2 rounded-lg bg-black md:p-11'>
                    <div className='text-yellow-400 group-hover:text-black'><FaHandshakeSimple className='text-5xl' /></div>
                    <h2 className=' m-auto p-4  text-xl  '>Experience Drivers</h2>
                    <p className=' text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    <p className=' m-2'>Learn More</p>
                </div>
            </div>
        </div>
    )
}

export default Page3