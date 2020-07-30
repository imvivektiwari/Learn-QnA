import React from 'react'
import './questionForm.css';
import Answers from './Answers';
import { decodeHTMLEntities } from '../../utils/utility';

const QuestionForm = ({questions, currectQuestion})=>{
    const activeQuestion = questions[currectQuestion];
    console.log(activeQuestion)
    return (
        <div id="quiz-question-form">
            <p className="quiz-item">Category: {activeQuestion?.category}</p>
            <p className="quiz-item">Level: {activeQuestion?.difficulty}</p>
            <div className="question-form-group">
                <p className="question-text">
                    {decodeHTMLEntities(activeQuestion?.question)}
                </p>
                <Answers type={activeQuestion?.type} 
                    correct={activeQuestion?.correct_answer}
                    incorrect={activeQuestion?.incorrect_answers}
                    currectQuestion={currectQuestion}
                />
            </div>
        </div>
    )
};

export default QuestionForm;