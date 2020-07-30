import React, { useEffect, useState, useRef, useCallback } from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { getQuizURL } from '../../utils/utility';
import './startTest.css'
import QuestionForm from '../questionAnswer/QuestionForm';
import { setQuestionAnswersAction, removeQuestionAnswersAction } from '../../redux/questionsAnswes/questionsAnswersActions';
import { useHistory } from 'react-router-dom';
import { storeToLocalStorage } from '../../utils/storage';
import Welcome from '../welcome/Welcome';

export default function StartTest() {
    
    const quiz = useSelector(state => ({
        quizForm: state.quizForm,
        questionAnswers:state.questionAnswers,
        isAuthenticated:state.login.isAuthenticated
    }));

    const dispatch = useDispatch();
    const numOfQuestions = quiz.quizForm.numberOfQuestions;
    const selectedCategory = quiz.quizForm.categories.selected.value;
    const selectedDifficultyLevel = quiz.quizForm.difficultyLevels.selected.value;
    const selectedType = quiz.quizForm.types.selected.value;
    const [currectQuestion, setCurrectQuestion] = useState(0);
    const history = useHistory();
    const uref = useRef(true);

    const fetchQuestions = useCallback(()=>{
        let formValues = {
            numOfQuestions,
            selectedCategory,
            selectedDifficultyLevel,
            selectedType
        }
        const url =  getQuizURL(formValues);
        if(uref.current){
            console.log("fetching quiz");
            dispatch(setQuestionAnswersAction(url));
        }
    }, [dispatch, numOfQuestions, selectedCategory, selectedDifficultyLevel, selectedType]);

    useEffect(()=>{
        setTimeout(()=>{
            fetchQuestions();
        }, 500);

        return ()=>{
            uref.current=false;
            dispatch(removeQuestionAnswersAction());
        }
    }, [dispatch, fetchQuestions]);

    const endTest = ()=>{
        const confirmEnd = window.confirm("Are you sure, you want to end the test");
        if(confirmEnd){
            history.push("/previousSubmission");
            storeToLocalStorage("prev-submission", JSON.stringify(quiz.questionAnswers))
        }
    };

    return (
        <>
            {
                !quiz.isAuthenticated?
                <Welcome />:
                <div id="quiz-container">
                    <div id="quiz-questions-container" >
                        <div id="quiz-questions-form">
                            <QuestionForm questions={quiz.questionAnswers} currectQuestion={currectQuestion}/>
                        </div>
                        <div id="quiz-container-footer">
                            <button onClick={()=>setCurrectQuestion(currectQuestion-1)}
                                className={`footer-item ${currectQuestion <= 0 && 'disabled'}`}
                            >
                                Previous
                            </button>
                            <button onClick={()=>setCurrectQuestion(currectQuestion+1)}
                                className={`footer-item ${currectQuestion + 1 >= quiz.questionAnswers?.length && 'disabled'}`}
                            >
                                Next
                            </button>
                            <button to="/result" 
                                className="footer-item" onClick={endTest}>
                                End Test
                            </button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
