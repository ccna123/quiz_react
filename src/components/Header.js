import React from 'react'

export const Header = () => {
    return (
        <div className='flex justify-around items-center lg:h-[10vw]' style={{ border: ['1px solid red'] }}>
            <img src="/img/logo.png" alt="" className='md:w-[256px] md:h-[256px] w-[64px] h-[64px]' />
            <input type="text" placeholder='Search quiz' className='p-4 rounded-lg focus:outline-none w-[128px] h-[64px]' />
        </div>
    )
}
