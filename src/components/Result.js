import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

export const Result = ({ result, questionsLength }) => {
  const btnVariant = {
    hover: {
      scale: 1.1,
      boxShadow: "0px 0px 8px 0px rgb(255,255,255)",
      borderRadius: "9999px",
      transition: {
        repeat: Infinity,
        duration: 0.5,
      },
    },
  };
  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ delay: 0.2, duration: 1 }}
      className="fixed inset-0 top-0 flex justify-center items-center"
    >
      <div className="flex-col justify-center w-[1024px] h-full bg-gray-200 rounded-lg px-20 py-8">
        <h1 className="text-9xl text-center">Result</h1>
        <p className="text-center text-8xl">
          {result}/{questionsLength}
        </p>
        <motion.div
          className="mx-auto mt-6 hover:scale-105 w-fit duration-100 flex justify-center"
          variants={btnVariant}
          whileHover="hover"
        >
          <Link to="/quiz" className="rounded-full bg-orange-300 px-10 py-2">
            Go back
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};
