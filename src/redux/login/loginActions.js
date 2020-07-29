import {READ_USER, STORE_USER, DELETE_USER} from './loginActionTypes';
import {storeToLocalStorage, deleteFromLocalStorage} from '../../utils/login';

export const readLogin = (userData)=>{
    return{
        type:READ_USER,
        payload:userData
    }
};

export const storeUserLogin = (email, username)=>{
    const payload={
        email,
        username
    }
    storeToLocalStorage(STORE_USER, JSON.stringify(payload));
    return{
        type:STORE_USER,
        payload
    }
};


export const deleteUserLogin = ()=>{
    deleteFromLocalStorage(STORE_USER);
    return{
        type:DELETE_USER
    }
};
