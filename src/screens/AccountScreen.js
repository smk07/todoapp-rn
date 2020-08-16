import React, { useContext } from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-navigation'
import {Button} from 'react-native-elements';
import {Context as AuthContext} from '../context/AuthContext';
import { FontAwesome } from "@expo/vector-icons";

const AccountScreen = ()=>{
    const {signout} = useContext(AuthContext);

    return <SafeAreaView forceInset={{top:'always'}}>
        {/* <Text>Account Screen</Text> */}
        <Button title="Log Out" onPress={()=> signout()} />
    </SafeAreaView>;
};

AccountScreen.navigationOptions = {
    title:'My Account',
    tabBarIcon : <FontAwesome size={25} name="gear" />
}

const styles = StyleSheet.create({});

export default AccountScreen;