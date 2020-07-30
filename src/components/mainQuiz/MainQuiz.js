import React from 'react'
import './mainQuiz.css';
import ChooseQuizForm from './ChooseQuizForm';
import { useSelector } from 'react-redux';
import Welcome from '../welcome/Welcome';

const MainQuiz =()=>{
    const login = useSelector(state => state.login);

    return (
        <div id="main-quiz-container">
            {login.isAuthenticated && <ChooseQuizForm />}
            {!login.isAuthenticated && <Welcome />}
        </div>
    )
};

export default MainQuiz;
