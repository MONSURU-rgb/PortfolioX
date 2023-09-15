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

// headers: {
//   Authorization: `Bearer ${token}`,
// },
