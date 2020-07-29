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

    return (
        <form id="quiz-form" className="debug">
             <input  value={quizForm.numberOfQuestions} onChange={setNumberOfQuestions} />
             <select value={quizForm.categories.selected.value} onChange={setCategory}>
                 {
                     quizForm.categories.categoryOptions.map((category)=>{
                        return <option value={category.value} key={category.value}>{category.text}</option>
                     })
                 }
             </select>
             <select value={quizForm.difficultyLevels.selected.value} onChange={setDifficultyLevel}>
                 {
                     quizForm.difficultyLevels.difficultyLevelOptions.map((difficultyLevel)=>{
                        return <option value={difficultyLevel.value} key={difficultyLevel.value}>{difficultyLevel.text}</option>
                     })
                 }
             </select>
             <select value={quizForm.types.selected.value} onChange={setQuizTypes}>
                 {
                     quizForm.types.typeOptions.map((quizType)=>{
                        return <option value={quizType.value} key={quizType.value}>{quizType.text}</option>
                     })
                 }
             </select>
        </form>
    )
};

export default  ChooseQuizForm;
