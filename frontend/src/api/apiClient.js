import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:8000', // Replace with actual backend URL
    headers: {
        'Content-Type': 'multipart/form-data',
    },
});

export default apiClient;
