import { motion } from "framer-motion";
import React from "react";

export const QuizCard = ({ image, name, questions }) => {
  return (
    <motion.div
      whileHover={{ scaleX: 1.2 }}
      transition={{ type: "spring", stiffness: 120 }}
      className="m-10 mx-auto rounded-lg bg-white shadow-lg w-fit cursor-pointer"
    >
      <img src={image} className="w-[256px] h-[256px]" />
      <div className="p-4">
        <p>{name}</p>
        <p>{questions.length} Questions</p>
      </div>
    </motion.div>
  );
};
