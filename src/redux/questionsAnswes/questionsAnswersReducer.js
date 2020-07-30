const { SET_QUESTIONS, UPDATE_ATTEMP_ANSWER, REMOVE_QUESTIONS } = require("./questionsAnswersActionTypes");

const initialState = [];

export const questionAndAnswersReducer = (state=initialState, action)=>{
    let newState = [...state];
    switch(action.type){
        case SET_QUESTIONS:
            const appendAns = action.payload.map((question)=>{
                return {
                    ...question,
                    attempedOption:false
                }
            });
            newState = appendAns;
            break;
        case REMOVE_QUESTIONS:
            newState = []
             break;
        case UPDATE_ATTEMP_ANSWER:
            let question = {...newState[action.payload.questionIndex]};
            question.attempedOption=action.payload.answer;
            newState[action.payload.questionIndex]=question;
            break;
        default: return state;
    }
    return newState;
};