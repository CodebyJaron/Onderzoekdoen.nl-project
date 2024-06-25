import Login from "../components/Login";
import Dashboard from "../components/Dashboard";
import NotFound from "../components/error/NotFound";

export interface RouteType {
    path: string;
    component: React.FC;
    meta: {
        auth: boolean;
    };
}

export const routes = [
    { path: "/login", component: Login, meta: { auth: false } },
    { path: "/dashboard", component: Dashboard, meta: { auth: true } },
    { path: "*", component: NotFound, meta: { auth: false } },
];
