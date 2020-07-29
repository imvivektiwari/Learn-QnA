import {createStore, applyMiddleware, combineReducers} from 'redux';
import { loginReducer } from './login/loginReducer';
import {quizFormReducer} from './quizForm/quizFormReducer';
import thunk from 'redux-thunk';

const rootStore = combineReducers({
    login:loginReducer,
    quizForm:quizFormReducer
})

export const store = createStore(rootStore, applyMiddleware(thunk));