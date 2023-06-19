import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <div className='w-full'>
            <div className='flex justify-center mt-52'>
                <Link
                    to="/quiz"
                    className='rounded-lg bg-orange-300 px-10 py-2 hover:scale-105 duration-100'>
                    Start
                </Link>
            </div>
        </div>
    )
}
