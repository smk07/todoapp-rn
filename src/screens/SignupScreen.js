import React, { useContext, useEffect } from 'react';
import {View,Text,StyleSheet} from 'react-native';
import AuthForm from '../components/AuthForm'
import { Context as AuthContext } from '../context/AuthContext';
import NavLink from '../components/Navlink';
import { NavigationEvents } from 'react-navigation';

const SignupScreen = ()=>{
    const {state,signup,clearErrorMessage} = useContext(AuthContext);

    return <View style={styles.viewStyle} >
        <NavigationEvents onWillFocus={()=>clearErrorMessage()} />
        <AuthForm 
            headerText="Sign Up Page"
            submitButtonText ="Sign Up"
            onSubmit={(email,password)=>signup({email,password})}
            errorMessage = {state.errorMessage}
        />
        <View style={styles.navlinkViewStyle}>
            <NavLink  routeName="Signin" linkText="Already Have An Account? Signin!" />
        </View>
    </View>
};

SignupScreen.navigationOptions = ()=>{
    return {
        headerShown:false
    }
}

const styles = StyleSheet.create({
    viewStyle:{
        flex:1,
        justifyContent:'center'
    },
    navlinkViewStyle:{
        margin:10
    }
});

export default SignupScreen;