import React, { useContext } from 'react'
import { TiLocationArrow } from "react-icons/ti";
import { IoIosPhonePortrait } from "react-icons/io";
import { RiInstagramLine } from "react-icons/ri";
import { IoLogoFacebook } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {

    return (
        <div className='w-full rounded-t-3xl p-8 bg-slate-100 dark:bg-stone-900 dark:text-white'>
            <div className='grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center md:gap-3 '>
                <div className='flex flex-col gap-6 items-start justify-start pt-7 md:px-4 md:py-2 lg:gap-3'>
                    <h2 className='text-xl capitalize font-bold' >car rental</h2>
                    <p className=''>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate.</p>
                    <div className='flex flex-row items-center gap-2'>
                        <TiLocationArrow className='text-3xl md:text-xl' />
                        <p className='text-base'>Noida, Uttar Pradesh</p>
                    </div>
                    <div className='flex flex-row items-center gap-2 md:text-2xl'>
                        <IoIosPhonePortrait className='text-3xl' />
                        <p className='text-base'>+91 123456789</p>
                    </div>
                    <div className='flex gap-3 items-center text-4xl mt-3 md:text-3xl'>
                        <RiInstagramLine />
                        <IoLogoFacebook />
                        <FaLinkedin />
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-10 pb-6 md:grid-cols-3 '>
                    <div className='flex flex-col gap-5 md:gap-7'>
                        <h2 className='text-xl capitalize font-bold text-left'>important links</h2>
                        <ul className='flex flex-col gap-4 text-lg capitalize md:gap-6'>

                            <li className='text-black  dark:text-white hover:text-yellow-400' ><span className='mr-3'>⮚</span><a href="#about">home</a></li>
                            <li className='text-black  dark:text-white hover:text-yellow-400'><span className='mr-3'>⮚</span><a href="">about</a></li>
                            <li className='text-black  dark:text-white hover:text-yellow-400'><span className='mr-3'>⮚</span><a href="">contact</a></li>
                            <li className='text-black  dark:text-white hover:text-yellow-400'><span className='mr-3'>⮚</span><a href="">blog</a></li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-5 md:gap-7'>
                        <h2 className='text-xl capitalize font-bold text-left'>important links</h2>
                        <ul className='flex flex-col gap-4 text-lg capitalize md:gap-6'>

                            <li className='text-black  dark:text-white hover:text-yellow-400' ><span className='mr-3'>⮚</span><a href="#about">home</a></li>
                            <li className='text-black  dark:text-white hover:text-yellow-400'><span className='mr-3'>⮚</span><a href="">about</a></li>
                            <li className='text-black  dark:text-white hover:text-yellow-400'><span className='mr-3'>⮚</span><a href="">contact</a></li>
                            <li className='text-black  dark:text-white hover:text-yellow-400'><span className='mr-3'>⮚</span><a href="">blog</a></li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-5 md:gap-7'>
                        <h2 className='text-xl capitalize font-bold text-left'>important links</h2>
                        <ul className='flex flex-col gap-4 text-lg capitalize md:gap-6 '>
                            <li className='text-black  dark:text-white  hover:text-yellow-400' ><span className='mr-3'>⮚</span><a  href="#about">home</a></li>
                            <li className='text-black  dark:text-white hover:text-yellow-400'><span className='mr-3'>⮚</span><a href="">about</a></li>
                            <li className='text-black  dark:text-white hover:text-yellow-400'><span className='mr-3'>⮚</span><a href="">contact</a></li>
                            <li className='text-black  dark:text-white hover:text-yellow-400'><span className='mr-3'>⮚</span><a href="">blog</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer