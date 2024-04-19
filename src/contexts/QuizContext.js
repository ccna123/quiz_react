import React, { createContext, useState } from "react";
import quizes from "../quizes.json";

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const clearSearchQuery = () => {
    setSearchQuery("");
  };

  return (
    <QuizContext.Provider
      value={{
        quizes,
        searchQuery,
        clearSearchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
