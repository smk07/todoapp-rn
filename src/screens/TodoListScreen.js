import React, { useContext, useEffect } from 'react';
import {View,Text,StyleSheet, FlatList,TouchableOpacity, ScrollView} from 'react-native';
import { SafeAreaView, NavigationEvents } from "react-navigation";
import { Context as TodoListContext } from "../context/TodoListContext";
// import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { ListItem } from 'react-native-elements';
import { navigate } from '../NavigationRef';

const TodoListScreen= ({navigation})=>{
    const {state,getAllLists} = useContext(TodoListContext); 

    // useEffect(()=>{
    //     getAllLists();
    // },[]);

    // console.log(state);

    return <View style={{marginHorizontal:5,flex:1}} >
        <NavigationEvents onWillFocus={()=>getAllLists()} />
        
        {state.lists.length
            ?<FlatList 
                data={state.lists}
                keyExtractor={(list)=>list._id}
                renderItem={({item}) => {
                    // return <View style={styles.listStyle}>
                    return    <TouchableOpacity onPress={()=> navigation.navigate('TodoDetail',{id:item._id})}>
                            {/* <Text style={styles.textStyle} >{item.title}</Text> */}
                            <ListItem chevron title={item.title} style={styles.listStyle} />
                        </TouchableOpacity>
                    // </View>
                }}
            />
            : <View style={{flex:1,justifyContent:'space-around',alignItems:'center'}}>
                <Text style={{fontSize:20,color:'gray',fontWeight:'normal'}} >
                    Your Todo List Is Empty!
                </Text>
            </View>
        }
    </View>
}

TodoListScreen.navigationOptions= {
    title:'TodoList',
    headerRight:()=>{
        return <TouchableOpacity onPress={()=>navigate('TodoListCreate')}>
            <Text style={styles.createStyle}>
                Create
            </Text>
        </TouchableOpacity>
    }
}

const styles = StyleSheet.create({
    listStyle:{
        borderColor:'black',
        borderBottomWidth:2
    },
    textStyle:{
        fontSize:23,
    },
    createStyle:{
        marginRight:15,
        fontSize:18,
        borderColor:'rgb(15, 56, 12)',
        borderWidth:2,
        backgroundColor:'rgb(102, 255, 0)',
        padding:7,
        borderRadius:7
    }
});

export default TodoListScreen;