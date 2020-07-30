import { BASE_API_URL } from "../constants";

export const getQuizURL = (quizForm)=>{
    let url = `${BASE_API_URL}?`;
    let amount = `amount=${quizForm.numOfQuestions}`;
    let category = `&category=${quizForm.selectedCategory}`;
    let difficulty = `&difficulty=${quizForm.selectedDifficultyLevel}`;
    let type = `&type=${quizForm.selectedType}`;
    
    quizForm.numOfQuestions!==0 && (url+=amount);
    quizForm.selectedCategory!=='any' && (url+=category);
    quizForm.selectedDifficultyLevel!=='any' && (url+=difficulty);
    quizForm.selectedType!=='any' && (url+=type);

    return url;
};