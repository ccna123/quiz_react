import React from "react";
import { motion } from "framer-motion";
import { useContext } from "react";
import { QuizContext } from "../contexts/QuizContext";
import { Link } from "react-router-dom";
export const Header = () => {
  const { searchQuery, setSearchQuery } = useContext(QuizContext);

  function search(e) {
    e.preventDefault();
    setSearchQuery(e.target.value);
  }

  return (
    <div
      className="flex justify-around items-center lg:h-[10vw]"
      // initial={{ y: -250 }}
      // animate={{ y: -10 }}
      // transition={{
      //     delay: 0.5,
      //     duration: 1
      // }}
    >
      <img
        src="/img/logo.png"
        alt=""
        className="md:w-[256px] md:h-[256px] w-[128px] h-[128px]"
      />
      <div className="bg-white mt-5 p-4 text-2xl rounded-lg w-[256px] h-[64px] flex justify-center items-center">
        {/* <Link to='/add_question'>Add question</Link> */}
      </div>
      <input
        value={searchQuery}
        onChange={(e) => search(e)}
        type="text"
        placeholder="Search quiz"
        className=" mt-5 p-4 rounded-lg focus:outline-none w-[256px] h-[64px]"
      />
    </div>
  );
};
