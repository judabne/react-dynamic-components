import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-demo1.firebaseio.com/'
})

export default instance;
