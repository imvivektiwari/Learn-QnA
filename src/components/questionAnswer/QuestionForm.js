import React from 'react'
import './questionForm.css';
import Answers from './Answers';
import { decodeHTMLEntities } from '../../utils/utility';

const QuestionForm = ({questions, currectQuestion})=>{
    const activeQuestion = questions[currectQuestion];
    return (
        <div id="quiz-question-form">
             <p className="quiz-item">Category: {activeQuestion?.category}</p>
            <p className="quiz-item progress">
                <span>Level: {activeQuestion?.difficulty}</span>
                <span>Question: {`${currectQuestion+1}/${questions?.length}`}</span>
            </p>
            <div className="question-form-group">
                <p className="question-text">
                    {decodeHTMLEntities(activeQuestion?.question)}
                </p>
                <Answers type={activeQuestion?.type} 
                    correct={activeQuestion?.correct_answer}
                    incorrect={activeQuestion?.incorrect_answers}
                    currectQuestion={currectQuestion}
                    attempedOption={activeQuestion?.attempedOption}
                />
            </div>
        </div>
    )
};

export default QuestionForm;