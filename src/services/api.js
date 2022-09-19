import axios from "axios";

const api = axios.create({
  baseURL: "https://plan-to-read-booklist.vercel.app/api",
});

export default api;
