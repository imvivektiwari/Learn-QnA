import { SET_SELECTED_CATEGORY, SET_SELECTED_TYPE, SET_SELECTED_LEVEL, SET_QUESTION_COUNT } from "./quizFromActionTypes"


export const setSelectedCategory = (data)=>{
    return{
        type:SET_SELECTED_CATEGORY,
        payload:data
    }
}

export const setSelectedType = (data)=>{
    return{
        type:SET_SELECTED_TYPE,
        payload:data
    }
}

export const setSelectedLevel = (data)=>{
    return{
        type:SET_SELECTED_LEVEL,
        payload:data
    }
}

export const setQuestionCount = (data)=>{
    return{
        type:SET_QUESTION_COUNT,
        payload:data
    }
}

