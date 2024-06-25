import { postRequest, setToken } from "../http";
import { LoginResponse } from "./types";

export const login = async (
    username: string,
    password: string
): Promise<LoginResponse> => {
    try {
        const response = await postRequest("login", { username, password });

        if (response.data.token) {
            localStorage.setItem("user", JSON.stringify(response.data));
            setToken(response.data.token);
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
