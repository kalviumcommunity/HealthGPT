import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:8000/api', // Your FastAPI backend URL
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

export const analyzeReport = (file) => {
  const formData = new FormData();
  formData.append('file', file);
  return apiClient.post('/analyze-report/', formData);
};