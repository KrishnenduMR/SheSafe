import apiClient from './apiClient';

export const predictViolence = (audioFile) => {
    const formData = new FormData();
    formData.append('audiofile', audioFile);
    return apiClient.post('/api/predict-violence/', formData);
};
