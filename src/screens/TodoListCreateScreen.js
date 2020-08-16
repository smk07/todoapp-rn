import React, { useContext } from 'react';
import {View,Text,StyleSheet} from 'react-native';
import TodoListForm from '../components/TodoListForm';
import {Context as TodoListContext} from '../context/TodoListContext';
import { NavigationEvents } from 'react-navigation';

const TodoListCreateScreen = ()=>{
    const {state,addList,clearErrorMessage} = useContext(TodoListContext);

    return <View style={styles.viewStyle}>
        <NavigationEvents onWillFocus={()=>clearErrorMessage()} />
        <TodoListForm 
            initialTitle=''
            initialDescription=''
            onSubmit={(title,description)=>addList({title,description})}
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


TodoListCreateScreen.navigationOptions ={
    title:"TodoList Create"
}

export default TodoListCreateScreen;
