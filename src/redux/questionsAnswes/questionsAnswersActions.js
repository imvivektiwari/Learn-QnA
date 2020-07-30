import {SET_QUESTIONS, REMOVE_QUESTIONS} from './questionsAnswersActionTypes';

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
