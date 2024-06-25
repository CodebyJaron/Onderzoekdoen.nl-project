import React, { ReactElement } from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import Profile from "./components/Profile";

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route
                    path="/profile"
                    element={
                        <PrivateRoute>
                            <Profile />
                        </PrivateRoute>
                    }
                />
                <Route path="*" element={<Navigate replace to="/login" />} />
            </Routes>
        </Router>
    );
};

interface PrivateRouteProps {
    children: ReactElement;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
    const userItem = localStorage.getItem("user");
    const user = userItem ? JSON.parse(userItem) : null;

    return user ? children : <Navigate replace to="/login" />;
};

export default App;
