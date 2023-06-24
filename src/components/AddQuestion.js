import React, { useState } from "react";
import { useContext } from "react";
import { QuizContext } from "../contexts/QuizContext";
import { useFormik } from "formik";
import { basicSchema } from "../schema";

export const AddQuestion = () => {
  const [checked, setChecked] = useState();
  const { quizes } = useContext(QuizContext);
  const [questionType, setQuestionType] = useState("Trivial");

  const handleQuestionChange = (e) => {
    e.preventDefault();
    setQuestionType(e.target.value);
  };
  const formik = useFormik({
    initialValues: {
      question: "",
      answerA: "",
      answerB: "",
      answerC: "",
      answerD: "",
      picked: "yes/no",
      isCorrectA: false,
      isCorrectB: false,
      isCorrectC: false,
      isCorrectD: false,
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: () =>
      basicSchema(formik.values.picked === "yes/no" ? 2 : 4),
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col justify-center items-center bg-black w-full h-screen top-0 absolute z-50 bg-opacity-30">
          <div className="bg-slate-300 w-full md:w-[50%] rounded-md p-4">
            <input
              name="question"
              onBlur={formik.handleBlur}
              value={formik.values.question}
              onChange={formik.handleChange}
              className="rounded-md p-2 w-full focus:outline-blue-500"
              type="text"
              placeholder="Question"
            />
            <div className="flex justify-around mt-5">
              <div className="flex">
                <p className="mr-4">Yes/No</p>
                <input
                  type="radio"
                  name="picked"
                  value="yes/no"
                  onChange={(e) => {
                    formik.setFieldValue("picked", e.target.value);
                    formik.handleChange(e);
                  }}
                  checked={formik.values.picked === "yes/no"}
                />
              </div>
              <div className="flex">
                <p className="mr-4">Multiple choices</p>
                <input
                  type="radio"
                  name="picked"
                  value="multiple"
                  onChange={(e) => {
                    formik.setFieldValue("picked", e.target.value);
                    formik.handleChange(e);
                  }}
                  checked={formik.values.picked === "multiple"}
                />
              </div>
            </div>
            {formik.values.picked === "yes/no" ? (
              <>
                <div className="flex gap-3 items-center">
                  <input
                    name="answerA"
                    onBlur={formik.handleBlur}
                    value={formik.values.answerA}
                    onChange={formik.handleChange}
                    className="rounded-md p-2 w-full focus:outline-blue-500 my-5"
                    type="text"
                    placeholder="Answer A"
                  />
                  <span>
                    <input
                      type="checkbox"
                      checked={formik.values.isCorrectA}
                      value={formik.values.isCorrectA}
                      onChange={(e) => {
                        formik.handleChange(e);
                        formik.setFieldValue("isCorrect", e.target.checked);
                      }}
                      name="isCorrectA"
                    />
                  </span>
                </div>

                <div className="flex gap-3 items-center">
                  <input
                    name="answerB"
                    onBlur={formik.handleBlur}
                    value={formik.values.answerB}
                    onChange={formik.handleChange}
                    className="rounded-md p-2 w-full focus:outline-blue-500"
                    type="text"
                    placeholder="Answer B"
                  />
                  <span>
                    <input
                      type="checkbox"
                      checked={formik.values.isCorrectB}
                      value={formik.values.isCorrectB}
                      onChange={(e) => {
                        formik.handleChange(e);
                        formik.setFieldValue("isCorrect", e.target.checked);
                      }}
                      name="isCorrectB"
                    />
                  </span>
                </div>
              </>
            ) : (
              <>
                <div className="flex gap-3 items-center">
                  <input
                    name="answerA"
                    onBlur={formik.handleBlur}
                    value={formik.values.answerA}
                    onChange={formik.handleChange}
                    className="rounded-md p-2 w-full focus:outline-blue-500 my-5"
                    type="text"
                    placeholder="Answer A"
                  />
                  <span>
                    <input
                      type="checkbox"
                      checked={formik.values.isCorrectB}
                      value={formik.values.isCorrectB}
                      onChange={(e) => {
                        formik.handleChange(e);
                        formik.setFieldValue("isCorrect", e.target.checked);
                      }}
                      name="isCorrectB"
                    />
                  </span>
                </div>
                <div className="flex gap-3 items-center">
                  <input
                    name="answerC"
                    onBlur={formik.handleBlur}
                    value={formik.values.answerC}
                    onChange={formik.handleChange}
                    className="rounded-md p-2 w-full focus:outline-blue-500"
                    type="text"
                    placeholder="Answer C"
                  />
                  <span>
                    <input
                      type="checkbox"
                      checked={formik.values.isCorrectC}
                      value={formik.values.isCorrectC}
                      onChange={(e) => {
                        formik.handleChange(e);
                        formik.setFieldValue("isCorrect", e.target.checked);
                      }}
                      name="isCorrectC"
                    />
                  </span>
                </div>
                <div className="flex gap-3 items-center">
                  <input
                    name="answerD"
                    onBlur={formik.handleBlur}
                    value={formik.values.answerD}
                    onChange={formik.handleChange}
                    className="rounded-md p-2 w-full focus:outline-blue-500 my-5"
                    type="text"
                    placeholder="Answer D"
                  />
                  <span>
                    <input
                      type="checkbox"
                      checked={formik.values.isCorrectD}
                      value={formik.values.isCorrectD}
                      onChange={(e) => {
                        formik.handleChange(e);
                        formik.setFieldValue("isCorrect", e.target.checked);
                      }}
                      name="isCorrect"
                    />
                  </span>
                </div>
                <div className="flex gap-3 items-center">
                  <input
                    name="answerB"
                    onBlur={formik.handleBlur}
                    value={formik.values.answerB}
                    onChange={formik.handleChange}
                    className="rounded-md p-2 w-full focus:outline-blue-500"
                    type="text"
                    placeholder="Answer D"
                  />
                  <span>
                    <input
                      type="checkbox"
                      checked={formik.values.isCorrect}
                      value={formik.values.isCorrect}
                      onChange={(e) => {
                        formik.handleChange(e);
                        formik.setFieldValue("isCorrect", e.target.checked);
                      }}
                      name="isCorrect"
                    />
                  </span>
                </div>
              </>
            )}
            <button
              type="submit"
              className="bg-white my-5 rounded-md p-2 w-full shadow-lg hover:scale-105 duration-150"
            >
              Add question
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
