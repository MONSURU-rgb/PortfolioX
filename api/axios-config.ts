import { cookieStorage } from "@ibnlanre/portal";
import axios from "axios";

export const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

export const token = JSON.parse(
  cookieStorage.getItem("my-user") as string
)?.token;
export const APIInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

export const JsonServer = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    "Content-Type": "application/json",
  },
});

// headers: {
//   Authorization: `Bearer ${token}`,
// },
