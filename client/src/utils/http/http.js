import axios from 'axios';

const API_ROUTE = process.env.NODE_ENV === 'development' ? process.env.REACT_APP_API_ROUTE : process.env.REACT_APP_STAGING_API_ROUTE;

const http = axios.create({
  baseURL: API_ROUTE,
});

http.interceptors.request.use((config) => {
  if (localStorage.jwtToken) {
    config.headers.Authorization = `Bearer ${localStorage.jwtToken}`;
  }
  return config;
});

const API_SERVICE = {
  get(endpoint) {
    return http.get(endpoint);
  },

  post(endpoint, data) {
    return http.post(endpoint, data);
  },

  patch(endpoint, data) {
    return http.patch(endpoint, data);
  },

  delete(endpoint) {
    return http.delete(endpoint);
  },
};

export default API_SERVICE;
