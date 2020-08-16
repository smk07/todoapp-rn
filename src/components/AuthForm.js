import React, { useState } from 'react';
import {Text,Input} from 'react-native-elements';
import {View,StyleSheet, Button} from 'react-native';
import { NavigationEvents } from 'react-navigation';

const AuthForm = ({headerText,submitButtonText,onSubmit,errorMessage})=>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [err,setErr] = useState('');

    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    return <View>
        <NavigationEvents onWillFocus={()=>setErr('')} />
        <View style={styles.headerViewStyle}>
            <Text style={styles.headerStyle} >{headerText}</Text>
        </View>
        <Input
            autoCapitalize='none'
            autoCorrect={false}
            label="Email"
            placeholder="Enter Your Email"
            value={email}
            onChangeText = {(text)=>setEmail(text)}
        />

        <Input
            autoCapitalize='none'
            autoCorrect = {false}
            label = "Password"
            placeholder="Enter Your Password"
            value={password}
            secureTextEntry
            onChangeText = {(text)=>setPassword(text)}
        />

        {errorMessage ? <Text style={styles.errStyle}>{errorMessage} </Text>:null}
        <View style={styles.buttonStyle}>
            <Button title={submitButtonText} onPress={()=>{
                if(!validateEmail(email)){
                    setErr('Enter a valid Email');
                    return;
                }
                if(password.length <6){
                    setErr('Password must contain atleast 6 characters');
                    return;
                }
                if(password.length >32){
                    setErr('Password can contain atmost 32 Characters');
                    return;
                }
                onSubmit(email,password);
            }} />
            {(err && !errorMessage)?<Text style={{fontSize:15,color:'red'}}>{err}</Text> :null}
        </View>
    </View>
};

const styles = StyleSheet.create({
    headerStyle:{
        fontSize:25,
        marginHorizontal:7,
        alignSelf:'center'
    },
    headerViewStyle:{
        marginHorizontal:10
    },
    buttonStyle:{
        marginHorizontal:10
    },
    errStyle:{
        fontSize:18,
        color:'red',
        marginBottom:10,
        marginHorizontal:10
    }
});

export default AuthForm;