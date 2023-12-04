import axios from "axios";

// Configure the Base URL of application
const baseURL: string = process.env.NEXT_PUBLIC_API_URL!;
axios.defaults.baseURL = baseURL;

export const setupAxios = axios