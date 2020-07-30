import {SET_QUESTIONS, REMOVE_QUESTIONS, UPDATE_ATTEMP_ANSWER} from './questionsAnswersActionTypes';

const setQuestionAnswersToStoreAction = (data)=>{
    return{
        type:SET_QUESTIONS,
        payload:data
    }
}

export const setQuestionAnswersAction = (url)=>{
   return async (dispatch)=>{
        let responce = await (await fetch(url)).json();
        dispatch(setQuestionAnswersToStoreAction(responce.results))
   }
}

export const removeQuestionAnswersAction= ()=>{
    return{
        type:REMOVE_QUESTIONS,
    }
}


export const setAttemptedQuestionAction= (answer, questionIndex)=>{
    return{
        type:UPDATE_ATTEMP_ANSWER,
        payload:{answer, questionIndex}
    }
}
