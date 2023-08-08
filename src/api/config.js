// src/config/axios.js
import axios from 'axios';

const apiMedizona = axios.create({
    baseURL: 'https://api-v2.medizona.com.mx/api', 
    timeout: 10000,
});

export default apiMedizona;
