import React, { useEffect, useState, useRef } from 'react'
import {useSelector} from 'react-redux';
import { getQuizURL } from '../../utils/utility';

export default function StartTest() {
    const quizForm = useSelector(state => state.quizForm);
    const numOfQuestions = quizForm.numberOfQuestions;
    const selectedCategory = quizForm.categories.selected.value;
    const selectedDifficultyLevel = quizForm.difficultyLevels.selected.value;
    const selectedType = quizForm.types.selected.value;
    const [questions, setQuestions] = useState([])
    const uref = useRef(true);
    const fetchQuestions = async (url)=>{
        const responce = await (await fetch(url)).json();
        if(uref.current){
             console.log("updated");
             setQuestions(responce.results);
        }
    };

    useEffect(()=>{
        let formValues = {
            numOfQuestions,
            selectedCategory,
            selectedDifficultyLevel,
            selectedType
        }
        fetchQuestions(getQuizURL(formValues));
        return ()=>{
            uref.current=false;
        }
    }, [numOfQuestions, selectedCategory, selectedDifficultyLevel, selectedType]);

    return (
        <div>
            
        </div>
    )
}
