import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Toaster } from "../src/components/ui/toaster";

ReactDOM.render(
    <React.StrictMode>
        <App />
        <Toaster />
    </React.StrictMode>,
    document.getElementById("root")
);
