import React, { useEffect, useState, useRef, useCallback } from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { getQuizURL } from '../../utils/utility';
import './startTest.css'
import QuestionForm from './QuestionForm';
import { setQuestionAnswersAction, removeQuestionAnswersAction } from '../../redux/questionsAnswes/questionsAnswersActions';

export default function StartTest() {
    
    const quiz = useSelector(state => ({
        quizForm: state.quizForm,
        questionAnswers:state.questionAnswers
    }));

    const dispatch = useDispatch();
    const numOfQuestions = quiz.quizForm.numberOfQuestions;
    const selectedCategory = quiz.quizForm.categories.selected.value;
    const selectedDifficultyLevel = quiz.quizForm.difficultyLevels.selected.value;
    const selectedType = quiz.quizForm.types.selected.value;
    const [currectQuestion, setCurrectQuestion] = useState(0);

    const uref = useRef(true);
    const fetchQuestions = useCallback((url)=>{
        if(uref.current){
            console.log("fetching quiz");
            dispatch(setQuestionAnswersAction(url));
        }
    }, [dispatch]);

    useEffect(()=>{
        let formValues = {
            numOfQuestions,
            selectedCategory,
            selectedDifficultyLevel,
            selectedType
        }
        setTimeout(()=>{
            fetchQuestions(getQuizURL(formValues));
        }, 500);
        
        return ()=>{
            uref.current=false;
            dispatch(removeQuestionAnswersAction());
        }
    }, [dispatch, fetchQuestions, numOfQuestions, selectedCategory, selectedDifficultyLevel, selectedType]);

    return (
        <div id="quiz-container">
            <div id="quiz-questions-container" >
                <div id="quiz-questions-form" className="debug">
                    <QuestionForm questions={quiz.questionAnswers} currectQuestion={currectQuestion}/>
                </div>
                <div id="quiz-container-footer">
                    <button onClick={()=>setCurrectQuestion(currectQuestion-1)}>Previous</button>
                    <button onClick={()=>setCurrectQuestion(currectQuestion+1)}>Next</button>
                    <button onClick={()=>setCurrectQuestion(-1)}>End Test</button>
                </div>
            </div>
        </div>
    )
}
