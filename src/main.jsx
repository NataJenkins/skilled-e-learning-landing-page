import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Button from "./components/Button/Button.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Button text="Get Started" secondary />
    </React.StrictMode>
);
