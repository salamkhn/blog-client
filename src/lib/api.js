import axios from "axios";

const api=axios.create({
  baseURL:import.meta.env.VITE_BACKEND_URL_FROM_VERCEL,
  withCredentials:true
})
export default api