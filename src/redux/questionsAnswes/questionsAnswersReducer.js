const { SET_QUESTIONS, UPDATE_ATTEMP_ANSWER, REMOVE_QUESTIONS } = require("./questionsAnswersActionTypes");

const initialState = [];

export const questionAndAnswersReducer = (state=initialState, action)=>{
    let newState = {...state};
    switch(action.type){
        case SET_QUESTIONS:
            newState = action.payload
            break;
        case REMOVE_QUESTIONS:
            console.log(REMOVE_QUESTIONS);
            newState = []
             break;
        case UPDATE_ATTEMP_ANSWER:

            break;
        default: return state;
    }
    return newState;
};