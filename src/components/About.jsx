import React from 'react'

const About = () => {
    return (
    <>
    <div className='about-image'>
      {/* Background image for about page */}
    <div className='HeroBGcontainer'>
        <h1 className='pt-10 relative text-center text-3xl z-10 font-display'>Meet<span className='text-[#1E9500]'> Us</span></h1>
    </div>
    <div>
        <p className='pt-20 pb-2 mx-auto text-center font-semibold relative font-Jost'>
        <span className='text-[#1E9500]'>W</span>e are a grass roots company based
        in Texas. We work with small local
        farms to help deliver the highest
        quality CBD. All products are Bill
        1325 compliant. All products are
        under 0.03 THC content.</p>
    </div>
        {/* CTA button for products */}
        <btn className='pt-6 flex relative w-[215px] rounded-full h-[73px] bg-[#1E9500] text-white text-center text-xl mx-auto justify-center font-Jost'>Products</btn>
    </div>
    </>
  )
}

export default About