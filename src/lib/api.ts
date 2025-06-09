// src/lib/api.ts
import axios from 'axios';

/** Centralized HTTP client */
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json'
  }
});

/** Attach JWT if we have one */
api.interceptors.request.use((cfg) => {
  // Only try to get token from localStorage on client side
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');
    if (token && cfg.headers) {
      cfg.headers.Authorization = `Bearer ${token}`;
    }
  }
  return cfg;
});

// Add response interceptor for better error handling
api.interceptors.response.use(
  response => response,
  error => {
    console.error('API Error:', error.response?.data || error.message);
    throw error;
  }
);

export default api;
