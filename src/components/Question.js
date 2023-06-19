import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Result } from './Result';

export const Question = ({ questions }) => {
    const [index, setIndex] = useState(0);
    const [isSelected, setIsSelected] = useState(false);
    const [result, setResult] = useState(0);
    const [isCompleted, setIsCompleted] = useState(false);
    const chooseAnswer = (isCorrect) => {
        if (!isSelected) {
            if (isCorrect) {
                setResult(result + 1)
            }
            setIsSelected(true)
            setTimeout(() => {
                setIsSelected(false)
                if (index >= questions.length - 1) {
                    setIsCompleted(true)
                } else {

                    setIndex((index + 1))
                }
            }, 700);
        }
    }
    return (
        <div>
            <div className='mt-6 ml-10 hover:scale-105 w-fit duration-100'>
                <Link to="/" className='rounded-lg bg-orange-300 px-10 py-2 '>Go back</Link>
            </div>
            {
                isCompleted && <Result result={result} questionsLength={questions.length} />
            }
            <div className='flex flex-col justify-center items-center'>
                <div className='text-center mt-10 mx-2 md:w-[50vw] bg-gray-300 p-4 w-full rounded-lg'>
                    <p>{questions[index].text}</p>
                </div>
                <div className='mt-5 md:grid md:grid-cols-2 gap-20'>
                    {
                        questions[index].options.map(option => (
                            <div onClick={() => chooseAnswer(option.isCorrect)} key={option.id} className='flex mb-6 w-full cursor-pointer hover:scale-105 duration-150'>
                                <div className='bg-gray-300 h-100 rounded-l-lg p-4 flex items-center'>
                                    {option.label}
                                </div>
                                <p
                                    className={`rounded-r-lg text-center p-5 w-full ${isSelected && option.isCorrect
                                        ? 'bg-green-500'
                                        : isSelected && !option.isCorrect
                                        && 'bg-red-500'
                                        } bg-orange-300`}
                                >
                                    {option.text}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div >
    )
}
