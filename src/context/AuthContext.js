import createDataContext from './createDataContext';
import todolistApi from '../api/todolist';
import {navigate} from '../NavigationRef';
import { AsyncStorage } from "react-native";

const authReducer = (state,action)=>{
    switch(action.type){
        case 'signup':
            return {...state,token:action.payload}

        case 'signout':
            return {...state,token:null}

        case 'signin':
            return {...state,token:action.payload}
        
        case 'clear_error':
            return {...state,errorMessage:''};

        case 'add_error':
            return {...state,errorMessage:action.payload}
        
        default:
            return state;
    }
}

const signout = (dispatch)=>{
    return async()=>{
        await AsyncStorage.removeItem('token');
        dispatch({type:'signout'});
        navigate('Signup');
    }
}

const tryLocalSignin = (dispatch)=>{
    return async()=>{
        const token = await AsyncStorage.getItem('token');

        if(!token){
            navigate('Signup');
            return;
        }
        dispatch({type:'signin',payload:token});
        navigate('Todolist');
    }
};


const clearErrorMessage =(dispatch)=>{
    return ()=>{
        dispatch({type:'clear_error'});
    }
}

const signin = (dispatch)=>{
    return async({email,password})=>{
        try{
            const response = await todolistApi.post('/signin',({email,password}));
            await AsyncStorage.setItem('token',response.data.token);
            // console.log("Done!!");
            dispatch({type:'signin',payload:response.data.token});
            navigate('Todolist');
        }
        catch(err){
            console.log(err.message);
            dispatch({type:'add_error',payload:"Invalid Credentials"});
        }
    }
}

const signup = (dispatch) =>{
    return async ({email,password})=>{
        try{
            const response = await todolistApi.post('/signup',{email,password});
            // console.log(response);
            await AsyncStorage.setItem('token',response.data.token);
            dispatch({type:'signup',payload:response.data.token});
            console.log("Done!!");
            navigate('Todolist');
        }catch(err){
            console.log("Error");
            dispatch({type:'add_error',payload:"Something Went Wrong!"})
        }
    }
};

export const {Context,Provider} = createDataContext(
    authReducer,
    {signup,signin,clearErrorMessage,tryLocalSignin,signout},
    {errorMessage:'',token:null}
);