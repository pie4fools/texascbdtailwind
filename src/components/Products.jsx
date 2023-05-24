import React from 'react'
import productimg1 from '../assets/productimg1.jpg'
import productimg2 from '../assets/productimg2.jpg'
import productimg3 from '../assets/productimg3.jpg'
import productimg4 from '../assets/productimg4.jpg'


const Products = () => {
    return (
        <>
        {/* Background image for about page */}
        <div className='about-image pt-10'>
        {/* Current deals box */}
        <div class='productBox'><img className='mx-auto scale-50' src={productimg1}></img></div>
        <div class='productBox'><img className='mx-auto scale-50' src={productimg2}></img></div> 
        <div class='productBox'><img className='mx-auto scale-50' src={productimg3}></img></div> 
        <div class='productBox'><img className='mx-auto scale-50' src={productimg4}></img></div>       
        <div>
            <p className='pt-20 pb-2 mx-auto text-center font-semibold relative font-Jost'/>
        </div>
            {/* CTA button for products */}
            <div className='flex justify-end'>
                <btn className='pt-6 mb-5 flex relative w-[215px] rounded-full h-[73px] bg-[#1E9500] text-white text-center text-xl mx-auto justify-center font-Jost'>About</btn>
            </div>
        </div>
        </>
      )
    }

export default Products