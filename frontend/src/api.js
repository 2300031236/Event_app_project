import axios from 'axios';

// Create a pre-configured instance of axios
const api = axios.create({
  // Point this to your backend's URL and port
  baseURL: 'http://localhost:9001/api/auth'
});

export default api;