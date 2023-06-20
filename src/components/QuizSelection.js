import React from 'react'
import { QuizCard } from './QuizCard'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export const QuizSelection = ({ quizes }) => {
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
                <Link to="/" className='rounded-full bg-orange-300 px-10 py-2 '>Go back</Link>
            </motion.div>
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
        </motion.div>
    )
}
