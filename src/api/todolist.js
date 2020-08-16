import axios from 'axios';
import { AsyncStorage } from 'react-native';

const instance = axios.create({
    baseURL:"https://smk07-todoapp.herokuapp.com/",
});

instance.interceptors.request.use(
    async(config)=>{
        const token = await AsyncStorage.getItem('token');

        if(token) 
            config.headers.Authorization = `Bearer ${token}`;
        return config;
    },
    (err)=>{
        console.log(err);
        return Promise.reject(err);
    }
);

export default instance;