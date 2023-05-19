import React from 'react'
import HeroBG from '../assets/HeroBGimg.jpg'

const Hero = () => {
  return (
    <>
    <div className=''>
    <img className='bg-cover absolute h-[640px]' src={HeroBG} alt="Green Background"></img>
    <div className='HeroBGcontainer'>
        <h1 className='pt-10 relative text-center text-3xl z-10 font-display'><span className='text-[#1E9500]'>W</span>elcome to Texas<span className='text-[#1E9500]'> CBD</span></h1>
    </div>
    <div>
        <p className='pt-20 pb-2 mx-auto text-center font-semibold relative font-Jost'>Current Deals</p>
    </div>
        <div class='CurrentDealsBox'>
        </div>
    </div>
    </>
  )
}

export default Hero