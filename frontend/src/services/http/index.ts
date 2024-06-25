import type { AxiosRequestConfig } from "axios";

import axios from "axios";

const API_URL = "http://localhost:3000";

const http = axios.create({
    baseURL: API_URL,
    withCredentials: true,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

export const setToken = (token?: string | null) => {
    if (token) {
        localStorage.setItem("token", token);
        http.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        return;
    }

    localStorage.removeItem("token");
    delete http.defaults.headers.common["Authorization"];
    delete http.defaults.headers["Authorization"];

    http.defaults.withCredentials = false;
};

export const getToken = () => {
    return localStorage.getItem("token");
};

export const getRequest = (endpoint: string, options?: AxiosRequestConfig) =>
    http.get(endpoint, options);

export const postRequest = (
    endpoint: string,
    data: unknown,
    options?: AxiosRequestConfig
) => http.post(endpoint, data, options);

export const putRequest = (endpoint: string, data: unknown) =>
    http.put(endpoint, data);
export const deleteRequest = (endpoint: string) => http.delete(endpoint);
