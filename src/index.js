import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/styles/tailwind.css";
import SignIn from "./components/signin";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Router> */}
    <App />
    {/* <SignIn /> */}
    {/* </Router> */}
  </React.StrictMode>
);
reportWebVitals();
