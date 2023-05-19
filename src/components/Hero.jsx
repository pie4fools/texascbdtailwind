import React from 'react'

const Hero = () => {
  return (
    <>
    <div className='hero-image'>
      {/* Background image for hero page */}
    <div className='HeroBGcontainer'>
        <h1 className='pt-10 relative text-center text-3xl font-display'><span className='text-[#1E9500]'>W</span>elcome to Texas<span className='text-[#1E9500]'> CBD</span></h1>
    </div>
    <div>
        <p className='pt-20 pb-2 mx-auto text-center relative font-Jost'>Current Deals</p>
    </div>
        {/* Current deals box */}
        <div class='CurrentDealsBox'>
        </div>
        {/* CTA button for products */}
        <btn className='pt-6 flex relative w-[215px] rounded-full h-[73px] bg-[#1E9500] text-white text-center text-xl mx-auto justify-center font-Jost'>Products</btn>
    </div>
    </>
  )
}

export default Hero