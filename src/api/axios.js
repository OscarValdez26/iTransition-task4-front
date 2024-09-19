import axios from 'axios';

const URL = "https://task4-backend-1e6535aaaba6.herokuapp.com";

const instance = axios.create({
    baseURL:URL,
    withCredentials:true
})

export default instance;