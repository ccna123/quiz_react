import React from 'react'
import { Link } from 'react-router-dom'

export const Result = ({ result, questionsLength }) => {
    return (
        <div className='top-0 absolute w-full h-screen bg-opacity-50 bg-black flex justify-center items-center'>
            <div className='flex-col justify-center h-fit bg-gray-200 rounded-lg px-20 py-8' style={{ border: ['1px solid red'] }}>
                <h1 className='text-5xl'>Result</h1>
                <p className='text-center text-4xl'>{result}/{questionsLength}</p>
                <div className='mt-6 hover:scale-105 w-full duration-100 flex justify-center'>
                    <Link to="/" className='rounded-lg bg-orange-300 px-10 py-2 '>Go back</Link>
                </div>
            </div>
        </div >
    )
}
