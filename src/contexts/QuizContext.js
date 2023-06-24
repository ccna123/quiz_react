import React, { createContext, useState } from "react";
import quizes from "../quizes.json"
import { useNavigate } from "react-router-dom";

export const QuizContext = createContext()

export const QuizProvider = ({ children }) => {

    const [searchQuery, setSearchQuery] = useState('');

    const navigate = useNavigate()

    const clearSearchQuery = () => {
        setSearchQuery('');
    };


    return (
        <QuizContext.Provider value={{
            quizes, searchQuery, clearSearchQuery, setSearchQuery
        }}>
            {children}
        </QuizContext.Provider>
    )

}