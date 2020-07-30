import {createStore, applyMiddleware, combineReducers} from 'redux';
import { loginReducer } from './login/loginReducer';
import {quizFormReducer} from './quizForm/quizFormReducer';
import thunk from 'redux-thunk';
import { questionAndAnswersReducer } from './questionsAnswes/questionsAnswersReducer';

const rootStore = combineReducers({
    login:loginReducer,
    quizForm:quizFormReducer,
    questionAnswers:questionAndAnswersReducer
});

export const store = createStore(rootStore, applyMiddleware(thunk));