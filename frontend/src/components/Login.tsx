import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/auth/index";
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
import { useToast } from "./ui/use-toast";
import { beautifyDate } from "../services/helpers/date";

const Login: React.FC = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const { toast } = useToast();

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await login(username, password);
            toast({
                title: "Successfully logged in",
                description: beautifyDate(new Date()),
            });

            navigate("/dashboard");
        } catch (error) {
            toast({
                title: "Failed to login",
                description: beautifyDate(new Date()),
            });
        }
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <Card className="mx-auto max-w-sm">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold">Login</CardTitle>
                    <CardDescription>
                        Enter your username and password to login to your
                        account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleLogin}>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="email">Username</Label>
                                <Input
                                    id="username"
                                    type="username"
                                    placeholder="test"
                                    onChange={(e) =>
                                        setUsername(e.target.value)
                                    }
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    required
                                />
                            </div>
                            <Button type="submit" className="w-full">
                                Login
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default Login;
