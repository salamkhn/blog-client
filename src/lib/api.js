import axios from "axios";

const api=axios.create({
  baseURL:import.meta.env.VITE_BACKEND_URL_FROM_VERCEL_URL,
  withCredentials:true
  
})
console.log("vite_backend_uri_from_vercel_url:=>",import.meta.env.VITE_BACKEND_URL_FROM_VERCEL_URL)
export default api
