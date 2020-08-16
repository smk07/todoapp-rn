import React, { useState } from 'react';
import {View,StyleSheet} from 'react-native';
import { Text,Input,Button } from "react-native-elements";

const TodoListForm =({initialTitle,initialDescription,onSubmit,errorMessage})=>{
    const [title,setTitle]= useState(initialTitle);
    const [description,setDescription] = useState(initialDescription);
    const [err,setErr] = useState('');

    return <View>
        <Input 
            label="Title" 
            placeholder="Enter The Title Here"
            value={title}
            onChangeText={(text)=>setTitle(text)}
        />
        <Input 
            label="Description" 
            placeholder="Enter The Description Here"
            value={description}
            onChangeText={(text)=>setDescription(text)}
        />

        {errorMessage ? <Text style={{fontSize:20,color:'red'}}> {errorMessage} </Text>:null}

        <Button title="Save" onPress={()=>{
            
            if(!title){
                setErr("Title can't be empty");
                return;
            }

            if(!description){
                setErr("Description can't be empty!");
                return;
            }

            onSubmit(title,description);
            }} />

        {err && !errorMessage ? <Text style={{fontSize:20,color:'red'}} >{err}</Text> :null}
    </View>
};

const styles =StyleSheet.create({});

export default TodoListForm;

