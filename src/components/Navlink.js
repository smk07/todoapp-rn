import React from 'react';
import { View,StyleSheet,Text,TouchableOpacity } from "react-native";
import { withNavigation } from 'react-navigation';


const NavLink = ({navigation,linkText,routeName})=>{

    return <View>
        <TouchableOpacity onPress={()=>navigation.navigate(routeName)}>
            <Text style={styles.textStyle}>{linkText}</Text>
        </TouchableOpacity>
    </View>
};

const styles = StyleSheet.create({
    textStyle:{
        fontSize:16,
        color:'blue'
    }
});

export default withNavigation(NavLink);