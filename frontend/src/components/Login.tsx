// src/components/Login.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/AuthService";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Login: React.FC = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>("");

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        try {
            await login(username, password);
            navigate("/profile");
        } catch (error) {
            setErrorMessage("Failed to login");
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Card className="mx-auto max-w-sm">
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-bold">Login</CardTitle>
                <CardDescription>
                    Enter your email and password to login to your account
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="m@example.com"
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" required />
                    </div>
                    <Button type="submit" className="w-full">
                        Login
                    </Button>
                </div>
            </CardContent>
        </Card>
        // <div>
        //     <h2>Login</h2>
        //     <form onSubmit={handleLogin}>
        //         <div>
        //             <label>Username:</label>
        //             <input
        //                 type="text"
        //                 value={username}
        //                 onChange={(e) => setUsername(e.target.value)}
        //             />
        //         </div>
        //         <div>
        //             <label>Password:</label>
        //             <input
        //                 type="password"
        //                 value={password}
        //                 onChange={(e) => setPassword(e.target.value)}
        //             />
        //         </div>
        //         <div>
        //             <button type="submit" disabled={loading}>
        //                 {loading ? "Loading..." : "Login"}
        //             </button>
        //         </div>
        //         {errorMessage && <p className="error">{errorMessage}</p>}
        //     </form>
        // </div>
    );
};

export default Login;
