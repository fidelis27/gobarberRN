import axios from 'axios';

const IP_ADDRESS = 'http://localhost:3333';

const api = axios.create({
  baseURL: IP_ADDRESS,
});

export default api;
