import React, { useEffect,useContext } from 'react';
import {StyleSheet,View} from 'react-native';
import {Context as AuthContext} from '../context/AuthContext';

const ResolveAuthScreen = ()=>{
    const {tryLocalSignin} = useContext(AuthContext);

    useEffect(()=>{
        tryLocalSignin();
    },[]);
    return null;
};

const styes =StyleSheet.create({});

export default ResolveAuthScreen;
