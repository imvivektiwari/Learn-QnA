import React, {useCallback, useEffect} from 'react'
import {useDispatch} from 'react-redux';
import './login.css';
import { storeUserLogin, deleteUserLogin } from '../../redux/login/loginActions';
import { useParams } from 'react-router-dom';

const Login = ({goToRoot})=>{
    const dispatch = useDispatch();
    const params = useParams();
    const storeUser = useCallback(
        (event)=>{
            event.preventDefault();
            let email = event.target.email.value;
            let username = event.target.username.value;
            if(email && username){
                dispatch(storeUserLogin(email, username));
                goToRoot();
            }
            else{
                ///show alert once the main thread is free
                setTimeout(()=>alert("Please provide the details"), 0);
            }
        }, [dispatch, goToRoot]
    );

    useEffect(()=>{
        if(params?.auth==="noauth"){
            console.log("signout");
            dispatch(deleteUserLogin());
        }
    }, [dispatch, params]);

    return (
        <div id="login-container">
            <form id="login-form" onSubmit={(event)=> storeUser(event)}>
               <div>
                    <h3 className="title">LearnQnA - Login</h3>
                    <input name="email" type="text" placeholder="Email"/>
                    <input name="username" type="text" placeholder="Name" />
                    <input type="submit" value="Login" />
                </div>
            </form>
        </div>
    )
}

export default Login;