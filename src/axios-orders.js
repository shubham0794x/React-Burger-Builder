import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-11f50.firebaseio.com/'
});

export default instance;