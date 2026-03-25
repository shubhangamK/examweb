import axios from 'axios'
import { getToken } from './AuthService'


const axiosInstance = axios.create({
  baseURL: import.meta.VITE_API_BASE_URL
})

axiosInstance.interceptors.request.use((config) => {
  const token = getToken() 
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default axiosInstance