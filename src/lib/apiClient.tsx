// 共通で使えるようにコンポーネント化

import axios from "axios";

const apiClient = axios.create({
  // baseURL: "http://localhost:4000/api",
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
