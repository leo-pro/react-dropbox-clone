import axios from 'axios';

const api = axios.create({
    baseURL: 'https://clonedropbox.herokuapp.com'
});

export default api;