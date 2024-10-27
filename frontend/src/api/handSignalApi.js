import apiClient from './apiClient';

export const predictHandSignal = () => {
    return apiClient.post('/api/predict-help-hand-signal/');
};
