import App from "./App";
import './index.css'
import { BrowserRouter } from "react-router-dom";

export function Root() {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    )
}