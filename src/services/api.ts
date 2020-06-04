import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

api.interceptors.request.use(
  function (config) {
    const storageToken = localStorage.getItem("token");
    if (storageToken) {
      config.headers["Authorization"] = "Bearer " + storageToken;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default api;
