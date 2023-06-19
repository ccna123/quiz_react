import React from 'react'
import { QuizCard } from './QuizCard'
import { Link, Route, Routes } from 'react-router-dom'

export const QuizSelection = ({ quizes }) => {
    return (
        <>
            <div className='mt-6 ml-10 hover:scale-105 w-fit duration-100'>
                <Link to="/" className='rounded-lg bg-orange-300 px-10 py-2 '>Go back</Link>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2">
                {
                    quizes.map(quiz => (
                        <Link key={quiz.id} to={`/quiz/${quiz.id}`}>
                            <QuizCard
                                image={quiz.img}
                                name={quiz.name}
                                questions={quiz.questions}
                            />
                        </Link>
                    ))
                }
            </div>

            <div className="grid lg:grid-cols-4 md:grid-cols-2">


            </div>
        </>
    )
}
