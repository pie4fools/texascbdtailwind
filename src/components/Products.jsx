import React from 'react'

const Products = () => {
    return (
        <>
        <div className='about-image'>
          {/* Background image for about page */}
        <div className='productscontainer'>
        <div className='productsbox2'></div>
        <div className='productsbox3'></div>
        <div className='productsbox4'></div>
        <div className='productsbox5'></div>
        <div className='productsbox6'></div>
        <div className='productsbox7'></div>
        </div>
        <div>
            <p className='pt-20 pb-2 mx-auto text-center font-semibold relative font-Jost'/>
        </div>
            {/* CTA button for products */}
            <div className='flex justify-end'>
                <btn className='pt-6 flex relative w-[215px] rounded-full h-[73px] bg-[#1E9500] text-white text-center text-xl mx-auto justify-center font-Jost'>About</btn>
            </div>
        </div>
        </>
      )
    }

export default Products