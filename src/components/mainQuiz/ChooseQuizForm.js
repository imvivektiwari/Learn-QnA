import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { setSelectedCategory, setSelectedLevel, setSelectedType, setQuestionCount } from '../../redux/quizForm/quizFromActions';
import { useHistory } from 'react-router-dom';
import FormInput from '../form/FormInput';
import FormSelect from '../form/FormSelect';
import Form from '../form/Form';

const ChooseQuizForm = ()=>{
    const quizForm = useSelector(state => state.quizForm);
    const dispatch = useDispatch();
    const history = useHistory();

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
        history.push("/startTest");
    }
    
    return (
        <Form
            onSubmit={startQuiz}
            label="Learn QnA Form"
            id="quiz-form"
            submitValue="Start Quiz"
        >
            <FormInput 
                label="Number of Questions:"
                value={quizForm.numberOfQuestions}
                setValue={setNumberOfQuestions}
            />
            <FormSelect 
                label={"Select Category:"}
                selectedValue={quizForm.categories.selected.value}
                setOption={setCategory}
                allOptions={quizForm.categories.categoryOptions}
            />
            
            <FormSelect 
                label={"Select Difficulty:"}
                selectedValue={quizForm.difficultyLevels.selected.value}
                setOption={setDifficultyLevel}
                allOptions={quizForm.difficultyLevels.difficultyLevelOptions}
            />

            <FormSelect 
                label={"Select Type:"}
                selectedValue={quizForm.types.selected.value}
                setOption={setQuizTypes}
                allOptions={quizForm.types.typeOptions}
            />
        </Form>
    )
};

export default  ChooseQuizForm;
