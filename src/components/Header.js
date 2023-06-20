import React from 'react'
import { motion } from 'framer-motion'
export const Header = () => {
    return (
        <motion.div className='flex justify-around items-center lg:h-[10vw]'
            initial={{ y: -250 }}
            animate={{ y: -10 }}
            transition={{
                delay: 0.5,
                duration: 1
            }}
        >
            <img src="/img/logo.png" alt="" className='md:w-[256px] md:h-[256px] w-[128px] h-[128px]' />
            <input type="text" placeholder='Search quiz' className=' mt-5 p-4 rounded-lg focus:outline-none w-[256px] h-[64px]' />
        </motion.div>
    )
}
