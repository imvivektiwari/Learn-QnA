import React from 'react'
import './questionForm.css';
import Answers from './Answers';
import { decodeHTMLEntities } from '../../utils/utility';

const QuestionForm = ({questions, currectQuestion, stopChange})=>{
    const activeQuestion = questions[currectQuestion];
    return (
        <div id="quiz-question-form">
            <p className="quiz-item"><b>Category:</b> {activeQuestion?.category}</p>
            <p className="quiz-item progress">
                <span><b>Level:</b> {activeQuestion?.difficulty}</span>
                <span><b>Question:</b> {`${currectQuestion+1}/${questions?.length}`}</span>
            </p>
            <div className="question-form-group">
                <p className="question-text">
                    {decodeHTMLEntities(activeQuestion?.question || 'Loading...')}
                </p>
                <Answers type={activeQuestion?.type} 
                    correct={activeQuestion?.correct_answer}
                    incorrect={activeQuestion?.incorrect_answers}
                    currectQuestion={currectQuestion}
                    attempedOption={activeQuestion?.attempedOption}
                    stopChange={stopChange}
                />
            </div>
        </div>
    )
};

export default QuestionForm;