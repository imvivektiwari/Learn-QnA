import React, {useEffect, useRef} from 'react';
import {useDispatch} from 'react-redux';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Login from './components/login/Login';
import PreviousSubmission from './components/previousSubmission/PreviousSubmission';
import MainQuiz from './components/mainQuiz/MainQuiz';
import { readFromLocalStorage} from './utils/storage';
import { STORE_USER } from './redux/login/loginActionTypes';
import { storeUserLogin } from './redux/login/loginActions';
import StartTest from './components/startTest/StartTest';

const App = ()=>{

  const dispatch = useDispatch();
  const logoRef = useRef();
  useEffect(() => {
    let user = readFromLocalStorage(STORE_USER);
    if(user){
      user = JSON.parse(user);
      dispatch(storeUserLogin(user.email, user.username));
      goToRoot();
    }
  }, [dispatch]);

  const goToRoot = ()=>{
    logoRef.current.click();
  }

  return (
    <div className="App">
        <Router>
            <Header logoRef={logoRef}/>
            <Switch>
                <Route path="/login" exact strict component={()=> <Login goToRoot={goToRoot}/>} />
                <Route path="/login/:auth" exact strict component={()=> <Login goToRoot={goToRoot}/>} />
                <Route path="/previousSubmission" exact strict component={PreviousSubmission} />
                <Route path="/startTest" exact strict component={StartTest} />
                <Route path="/" exact strict component={MainQuiz} />
            </Switch>
        </Router>
    </div>
  );
};

export default App;
