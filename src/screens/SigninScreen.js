import React, { useContext } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Navlink from '../components/Navlink';
import AuthForm from '../components/AuthForm';
import {Context as AuthContext} from '../context/AuthContext';
import {NavigationEvents} from 'react-navigation';

const SigninScreen = ()=>{
    const {state,signin,clearErrorMessage} = useContext(AuthContext);

    return <View style={styles.viewStyle}>
        <NavigationEvents onWillFocus={()=>clearErrorMessage()} />
        <AuthForm 
            headerText="Sign In Page"
            onSubmit={(email,password) => signin({email,password})}
            submitButtonText="Sign In"
            errorMessage={state.errorMessage}
        />
        <View style={styles.navlinkViewStyle}>
            <Navlink routeName="Signup" linkText="Don't Have An Account? Signup!" />
        </View>
    </View>;
};

SigninScreen.navigationOptions = ()=>{
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

export default SigninScreen;