import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  // baseURL: "http://localhost:5000",
});

// instance.interceptors.request.use((config) => {
//   config.headers.Autorization = window.localStorage.getItem("token");
//   return config;
// });

// save Autorization token

export default instance;
