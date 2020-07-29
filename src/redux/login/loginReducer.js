const { READ_USER, STORE_USER, DELETE_USER } = require("./loginActionTypes");

const initialState={
    user:{
        email:'',
        username:''
    },
    isAuthenticated:false
};

export const loginReducer = (state = initialState, action)=>{
    const newState = {...state};
    switch(action.type){
        case STORE_USER: 
            newState.user = {
                email: action.payload.email,
                username: action.payload.username
            };
            newState.isAuthenticated = true;
            break;
        case READ_USER:
            newState.user = {
                email: action.payload.email,
                username: action.payload.username
            };
            newState.isAuthenticated = action.payload.isAuthenticated;
            break;
        case DELETE_USER:
            newState.isAuthenticated=false;
            newState.user={}
            break;
        default: return state;
    }
    return newState;
};