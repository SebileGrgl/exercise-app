import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://exercisedb.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
});
