import React, { ReactElement } from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";

import { routes, RouteType } from "./routes/routes";

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                {routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        element={<ElementRenderer route={route} />}
                    />
                ))}
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
    const isLoggedIn = !!userItem;

    return isLoggedIn ? children : <Navigate replace to="/login" />;
};

interface ElementRendererProps {
    route: RouteType;
}

const ElementRenderer: React.FC<ElementRendererProps> = ({ route }) => {
    const { component: Component, meta } = route;

    if (meta.auth) {
        return (
            <PrivateRoute>
                <Component />
            </PrivateRoute>
        );
    }

    return <Component />;
};

export default App;
