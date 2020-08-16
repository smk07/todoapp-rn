import React from 'react';
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer,createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import { Provider } from './src/context/AuthContext';
import {setNavigator} from './src/NavigationRef';
import TodoListScreen  from "./src/screens/TodoListScreen";
import AccountScreen from './src/screens/AccountScreen';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';
import {Provider as TodoListProvider } from './src/context/TodoListContext';
import TodoDetailScreen from './src/screens/TodoDetailScreen';
import TodoListCreateScreen from './src/screens/TodoListCreateScreen';
import TodoListEditScreen from './src/screens/TodoListEditScreen';
import { FontAwesome } from "@expo/vector-icons";

const todolistFlow = createStackNavigator({
  Todolist: TodoListScreen,
  TodoDetail:TodoDetailScreen,
  TodoListCreate: TodoListCreateScreen,
  TodoListEdit:TodoListEditScreen
});

todolistFlow.navigationOptions ={
  title:'Your Todo List',
  tabBarIcon : <FontAwesome size={20} name="th-list" />
}

const switchNavigator = createSwitchNavigator({
  ResolveAuth:ResolveAuthScreen,
  loginFlow:createStackNavigator({
    Signup:SignupScreen,
    Signin :SigninScreen
  }),
  mainFlow:createBottomTabNavigator({
    todolistFlow,
    AccountScreen: AccountScreen
  })
});


const App= createAppContainer(switchNavigator);

export default ()=>{
  return <Provider>
    <TodoListProvider>
      <App ref={(navigator)=>setNavigator(navigator)} />
    </TodoListProvider>
  </Provider>
}