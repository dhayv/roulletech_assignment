import axios from 'axios';

const api = axios.create({
  baseURL: 'http://44.203.118.125/'  
});

export default api;
