// import React, { useEffect } from 'react'

import Home from './components/home'
import About from './components/about'
import Page3 from './components/about-2'
import Price from './components/price'
import Rating from './components/Rating'
import Playstore from './components/playstore'
import Collab from './components/collab'
import Footer from './components/footer'

import { useEffect } from 'react'


const App = () => {

  // useEffect(()=>{
  //   let htmlClasses=document.querySelector('html').classList
  //   if(localStorage.theme==='dark'){
  //     htmlClasses.remove('dark')     }
  // },[])
  return (
    <div className='w-full overflow-hidden dark:bg-black'>

<Home />
<About/>
<Page3/>
<Price/>
<Rating/>
<Playstore/>
<Collab/>
<Footer/>
    </div>

  )
}

export default App
