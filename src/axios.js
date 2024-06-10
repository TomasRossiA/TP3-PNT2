// services/axios.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://666780f9a2f8516ff7a7aaf0.mockapi.io',
  // Aquí puedes añadir más configuraciones como headers por defecto
});

export default axiosInstance;
