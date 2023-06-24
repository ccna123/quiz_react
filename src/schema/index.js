import * as yup from 'yup'

export const basicSchema = (numAnswers) => {
    let schema = yup.object().shape({
        question: yup.string().required("Question is required"),
        answerA: yup.string().required("Answer A is required"),
        answerB: yup.string().required("Answer B is required"),
    });

    if (numAnswers === 4) {
        schema = schema.shape({
            answerC: yup.string().required("Answer C is required"),
            answerD: yup.string().required("Answer D is required"),
        });
    }

    return schema
};