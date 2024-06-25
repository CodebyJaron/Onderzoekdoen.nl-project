// src/services/AuthService.ts
import axios from "axios";

const API_URL = "http://localhost:3000";

interface LoginResponse {
    token: string;
    username: string;
}

export const login = async (
    username: string,
    password: string
): Promise<LoginResponse> => {
    try {
        const response = await axios.post<LoginResponse>(
            `${API_URL}/auth/login`,
            { username, password }
        );

        if (response.data.token) {
            localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const logout = (): void => {
    localStorage.removeItem("user");
};

export const getCurrentUser = (): LoginResponse | null => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
};
