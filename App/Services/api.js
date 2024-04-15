import axios from 'axios';

const api = axios.create({
    baseURL: 'http://172.18.9.88:3333'
});

export default api;