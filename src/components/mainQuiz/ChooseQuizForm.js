import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { setSelectedCategory, setSelectedLevel, setSelectedType, setQuestionCount } from '../../redux/quizForm/quizFromActions';
const ChooseQuizForm = ()=>{
    const quizForm = useSelector(state => state.quizForm);
    const dispatch = useDispatch();

    const setCategory = (event)=>{
        let value = event.target.value;
        dispatch(setSelectedCategory(value));
    };

    const setDifficultyLevel = (event)=>{
        let value = event.target.value;
        dispatch(setSelectedLevel(value));
    };

    const setQuizTypes = (event)=>{
        let value = event.target.value;
        dispatch(setSelectedType(value));
    };

    const setNumberOfQuestions = (event)=>{
        let value = event.target.value;
        dispatch(setQuestionCount(value));
    };

    const startQuiz = (event)=>{
        event.preventDefault();
    }
    
    return (
        <form id="quiz-form" onSubmit={startQuiz}>
            <p className="quiz-form-title">Quiz Form</p>
            <label>
                <p>Number of Questions:</p>
                <input  value={quizForm.numberOfQuestions} onChange={setNumberOfQuestions} />
            </label>
            <label>
                <p>Select Category:</p>
                <select value={quizForm.categories.selected.value} onChange={setCategory}>
                 {
                     quizForm.categories.categoryOptions.map((category)=>{
                        return <option value={category.value} key={category.value}>{category.text}</option>
                     })
                 }
             </select>
            </label>
             
             <label>
                <p>Select Difficulty:</p>
                <select value={quizForm.difficultyLevels.selected.value} onChange={setDifficultyLevel}>
                 {
                     quizForm.difficultyLevels.difficultyLevelOptions.map((difficultyLevel)=>{
                        return <option value={difficultyLevel.value} key={difficultyLevel.value}>{difficultyLevel.text}</option>
                     })
                 }
             </select>
            </label>
           
             <label>
                <p>Select Type:</p>
                <select value={quizForm.types.selected.value} onChange={setQuizTypes}>
                 {
                     quizForm.types.typeOptions.map((quizType)=>{
                        return <option value={quizType.value} key={quizType.value}>{quizType.text}</option>
                     })
                 }
             </select>
            </label>
           
             <input type="submit" value="Start Quiz"/>
        </form>
    )
};

export default  ChooseQuizForm;
