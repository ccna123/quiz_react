import React from 'react'

export const QuizCard = ({ image, name, questions }) => {
    return (
        <div
            className='m-10 mx-auto rounded-lg bg-white shadow-lg w-fit cursor-pointer hover:scale-105 duration-150'>
            <img src={image} className='w-[256px] h-[256px]' />
            <div className='p-4'>
                <p>{name}</p>
                <p>{questions.length} Questions</p>
            </div>
        </div>
    )
}
