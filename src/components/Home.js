import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Home = () => {
  const btnVariant = {
    hover: {
      scale: 1.1,
      boxShadow: "0px 0px 8px 0px rgb(255,255,255)",
      borderRadius: "9999px",
    },
  };

  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      <motion.div
        className="flex justify-center mt-10 w-fit mx-auto"
        variants={btnVariant}
        whileHover="hover"
      >
        <Link
          to="/quiz"
          className="text-4xl h-fit rounded-full bg-orange-300 px-10 py-2 w-[256px] text-center items-center justify-center flex"
        >
          <button>Start the game</button>
        </Link>
      </motion.div>
      <motion.img
        animate={{ scale: 1.1 }}
        transition={{
          repeat: Infinity,
          duration: 1.0,
        }}
        className="w-48 h-48 mx-auto mt-10"
        src="/img/question_mark.png"
        alt=""
      />
    </motion.div>
  );
};
