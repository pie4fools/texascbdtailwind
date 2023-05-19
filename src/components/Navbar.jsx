import React from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
    return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white z-10'>
        <motion.h1
    initial={{
       x: -500,
       opacity: 0, 
    }}
    animate={{
        x: 0,
        opacity: 1,
    }}
    transition={{ duration: 1.5 }}  className='w-full text-3xl font-bold text-[#00dfd4]'>Logo</motion.h1>
        <motion.ul
    initial={{
       x: 100,
       opacity: 0, 
    }}
    animate={{
        x: 0,
        opacity: 1,
    }}
    transition={{ duration: 1.5 }} className='flex '>
            <div className="z-10">
        </div>
            <div className="z-10">
            <a
            href="https://github.com/pie4fools?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            >
            </a>
        </div>
        </motion.ul>
    </div>
    
  )
}

export default Navbar