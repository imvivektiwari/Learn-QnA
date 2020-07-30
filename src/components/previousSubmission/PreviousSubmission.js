import React, { useRef } from 'react'
import { readFromLocalStorage } from '../../utils/storage';
import QuestionForm from '../questionAnswer/QuestionForm';
import './previousSubmission.css'
import { useSelector } from 'react-redux';

const PreviousSubmission = ()=>{
    let quiz = readFromLocalStorage("prev-submission");
    const login = useSelector(state => state.login);
    let correctCount = 0;
    if(quiz){
        quiz = JSON.parse(quiz);
        console.log(quiz)
        correctCount = quiz.reduce((accumulator,question)=>{
            if(question.correct_answer==question.attempedOption){
                return accumulator+1
            }
            return accumulator;
        }, 0);
    }

    return (
        <div id="prev-submission-container">
            <div id="show-result">
                 <p>Hello, {login?.user?.username}</p>
                 <p>Your Score: {`${correctCount}/${quiz.length}`}</p>
            </div>
            <table border='1'>
                <thead>
                   <tr>
                        <th>S.No</th>
                        <th>Questions</th>
                        <th>Status</th>
                        <th>Correct Answer</th>
                   </tr>
                </thead>
               <tbody>
                   {
                       quiz.map((question, index)=>{
                            return(
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>
                                        <QuestionForm questions={quiz} currectQuestion={index}/>
                                    </td>
                                    <td>
                                        {question.correct_answer==question.attempedOption?"Correct":"Incorrect"}
                                    </td>
                                    <td>{question.correct_answer}</td>
                                </tr>
                            )
                       })
                   }
               </tbody>
            </table>
        </div>
    )
};

export default PreviousSubmission;
