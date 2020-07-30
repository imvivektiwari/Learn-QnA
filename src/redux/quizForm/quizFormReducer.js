import {SET_SELECTED_CATEGORY, SET_SELECTED_LEVEL, SET_QUESTION_COUNT, SET_SELECTED_TYPE} from './quizFromActionTypes'
const initialState={
    numberOfQuestions: 5,
    categories:{
        selected: {
            "value": "any"
        },
        categoryOptions: [
            {
              "text": "Any Category",
              "value": "any"
            },
            {
              "text": "General Knowledge",
              "value": "9"
            },
            {
              "text": "Entertainment: Books",
              "value": "10"
            },
            {
              "text": "Entertainment: Film",
              "value": "11"
            },
            {
              "text": "Entertainment: Music",
              "value": "12"
            },
            {
              "text": "Entertainment: Musicals & Theatres",
              "value": "13"
            },
            {
              "text": "Entertainment: Television",
              "value": "14"
            },
            {
              "text": "Entertainment: Video Games",
              "value": "15"
            },
            {
              "text": "Entertainment: Board Games",
              "value": "16"
            },
            {
              "text": "Science & Nature",
              "value": "17"
            },
            {
              "text": "Science: Computers",
              "value": "18"
            },
            {
              "text": "Science: Mathematics",
              "value": "19"
            },
            {
              "text": "Mythology",
              "value": "20"
            },
            {
              "text": "Sports",
              "value": "21"
            },
            {
              "text": "Geography",
              "value": "22"
            },
            {
              "text": "History",
              "value": "23"
            },
            {
              "text": "Politics",
              "value": "24"
            },
            {
              "text": "Art",
              "value": "25"
            },
            {
              "text": "Celebrities",
              "value": "26"
            },
            {
              "text": "Animals",
              "value": "27"
            },
            {
              "text": "Vehicles",
              "value": "28"
            },
            {
              "text": "Entertainment: Comics",
              "value": "29"
            },
            {
              "text": "Science: Gadgets",
              "value": "30"
            },
            {
              "text": "Entertainment: Japanese Anime & Manga",
              "value": "31"
            },
            {
              "text": "Entertainment: Cartoon & Animations",
              "value": "32"
            }
          ]
    },
    difficultyLevels: {
        selected: {
            "value":'any'
        },
        difficultyLevelOptions: [
            {
                "text":'Any Difficulty',
                "value":'any'
            },
            {
                "text":'Easy',
                "value":'easy'
            },
            {
                "text":'Medium',
                "value":'medium'
            },
            {
                "text":'Hard',
                "value":'hard'
            },
        ]
    },
    types:{
        selected:{
            "value":'any'
        },
        typeOptions: [
            {
                "text":'Any Type', 
                "value":'any'
            },
            {
                "text":'Multiple Choice', 
                "value":'multiple',
            },
            {
                "text":'True/False', 
                "value":'boolean'
            }
        ]
    }
}

export const quizFormReducer = (state=initialState, action)=>{
    const newState = {...state};
    switch(action.type){
        case SET_QUESTION_COUNT:
            newState.numberOfQuestions=action.payload
            break;
        case SET_SELECTED_CATEGORY:
            newState.categories = {...newState.categories};
            newState.categories.selected = {
                value:action.payload
            }
            break;
        case SET_SELECTED_LEVEL:
            newState.difficultyLevels = {...newState.difficultyLevels};
            newState.difficultyLevels.selected = {
                value:action.payload
            }
            break;
        case SET_SELECTED_TYPE:
            newState.types = {...newState.types};
            newState.types.selected = {
                value:action.payload
            }
            break;
        default: return state;
    }
    return newState;
    
};