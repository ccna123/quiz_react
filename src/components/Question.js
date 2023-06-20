import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Result } from './Result';
import { motion } from 'framer-motion'

export const Question = ({ questions }) => {
    const [index, setIndex] = useState(0);
    const [isSelected, setIsSelected] = useState(false);
    const [result, setResult] = useState(0);
    const [isCompleted, setIsCompleted] = useState(false);
    const chooseAnswer = (isCorrect) => {
        setIsSelected(true)
        if (isCorrect) {
            setResult(result + 1)
        }
        setTimeout(() => {
            setIsSelected(false)
            if (index >= questions.length - 1) {
                setIsCompleted(true)
            } else {

                setIndex((index + 1))
            }
        }, 700);
    }

    const btnVariant = {
        hover: {
            scale: 1.1,
            boxShadow: '0px 0px 8px 0px rgb(255,255,255)',
            borderRadius: '9999px',
            transition: {
                repeat: Infinity,
                duration: 0.5
            }
        }
    }

    return (
        <motion.div
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
        >
            <motion.div className='mt-6 ml-10 hover:scale-105 w-fit duration-100'
                variants={btnVariant}
                whileHover='hover'
            >
                <Link to="/quiz" className='rounded-full bg-orange-300 px-10 py-2 '>Go back</Link>
            </motion.div>
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
                                <p className={`rounded-r-lg text-center p-5 w-full ${isSelected && option.isCorrect
                                    ? 'bg-green-500'
                                    : isSelected && !option.isCorrect
                                        ? 'bg-red-500'
                                        : 'bg-orange-300'}`}
                                >
                                    {option.text}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </motion.div >
    )
}
