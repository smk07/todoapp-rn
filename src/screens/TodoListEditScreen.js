import React, { useContext } from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { Context as TodoListContext } from "../context/TodoListContext";
import TodoListForm from '../components/TodoListForm';
import { NavigationEvents } from 'react-navigation';


const TodoListEditScreen = ({navigation})=>{
    const {state,updateList,clearErrorMessage} = useContext(TodoListContext);

    const id = navigation.getParam('id');
    const list = state.lists.find(t=> t._id=== id);
    // console.log(list);

    return <View style={styles.viewStyle}>
        <NavigationEvents onWillFocus={()=>clearErrorMessage()} />
        <TodoListForm 
            initialTitle={list.title}
            initialDescription={list.description}
            onSubmit={(title,description)=>updateList({title,description,id})}
            errorMessage = {state.errorMessage}
        />
    </View>
};

const styles =StyleSheet.create({
    viewStyle:{
        flex:1,
        justifyContent:'center',
        marginHorizontal:10
    }
});

export default TodoListEditScreen;