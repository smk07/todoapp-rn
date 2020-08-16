import React, { useContext } from 'react';
import {Text,StyleSheet,View,TouchableOpacity,Alert} from 'react-native';
import {Context as TodoListContext} from '../context/TodoListContext';
import { NavigationEvents } from 'react-navigation';

let haha;

const setdelete = (deleteList)=>{
    haha=deleteList;
}

const TodoDetailScreen = ({navigation})=>{
    // <NavigationEvents onWillFocus={()=> ide = navigation.getParam('id') } />
    const id = navigation.getParam('id');
    const {state,getAllLists,deleteList} = useContext(TodoListContext);
    setdelete(deleteList);
    const {lists}= state;
    const list= lists.find(t => t._id === id);
    // console.log(list);

    return <View style={styles.viewStyle}>
        <NavigationEvents onWillFocus={()=>getAllLists()} />
        <Text style={styles.textLabel}>
            Title:
        </Text>
        <Text style={styles.textOneStyle}>
            {list.title}
        </Text>

        <Text style={styles.textLabel}>
            Description:
        </Text>
        <Text style={styles.textTwoStyle}>
            {list.description}
        </Text>
    </View>
};

const styles = StyleSheet.create({
    viewStyle:{
        flex:1,
        borderColor:'black',
        borderWidth:1,
        padding:10,
        backgroundColor:'lightblue'
        // justifyContent:"space-between"
    },
    textLabel:{
        fontSize:25,
        fontWeight:'bold',
        marginBottom:10
    },
    textOneStyle:{
        flex:1,
        fontSize:20,
        backgroundColor:'white',
        paddingTop:5
    },
    textTwoStyle:{
        flex:4,
        fontSize:20,
        backgroundColor:'white',
        paddingTop:5
    },
    deleteStyle:{
        marginRight:15,
        fontSize:18,
        borderColor:'red',
        backgroundColor:'rgb(240, 117, 117)',
        padding:7,
        paddingHorizontal:10,
        borderRadius:7
    },
    editStyle:{
        marginRight:15,
        fontSize:18,
        borderColor:'blue',
        backgroundColor:'rgb(111, 195, 237)',
        padding:7,
        paddingHorizontal:10,
        borderRadius:7
    }
});

TodoDetailScreen.navigationOptions = ({navigation})=> ({

    headerRight: ()=>{
        return <View style={{flexDirection:'row'}}>
            <TouchableOpacity onPress={()=>{
                const id = navigation.getParam('id');
                // console.log(navigation);
                // console.log(id);
                navigation.navigate('TodoListEdit',{id})
            }}>
                <Text style={styles.editStyle}>
                    Edit
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{
                Alert.alert("Delete Dialog Box","Do you want to delete this item ?",[
                    null,
                    {
                        text: "Cancel",
                        onPress: () => {},
                        style: "cancel"
                    },
                    {
                        text:"OK",
                        onPress:()=>{
                            const id= navigation.getParam('id');
                            // const {deleteList}=useContext(TodoListContext);
                            haha({id});
                        }
                    }
                ]);
                
                // const id = navigation.getParam('id');
                // console.log(navigation);
                // console.log(id);
                // navigation.navigate('TodoListEdit',{id})
            }}>
                <Text style={styles.deleteStyle}>Delete</Text>
            </TouchableOpacity>
        </View>
        // <Text style={{marginRight:15,fontSize:18}} >Edit</Text>
    },
    headerTitle:'Detail'
});

export default TodoDetailScreen;