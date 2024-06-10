// usuarios.js (o donde sea que estés usando la función getUsers)
import axiosInstance from '@/axios'; // Importa axiosInstance desde el archivo axios.js

export const getUsers = () => {
  return axiosInstance.get('/users');
};
