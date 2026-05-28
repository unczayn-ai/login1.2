import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import AuthProvider from "./context/AuthContext";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ThemeProvider from "./context/ThemeContext";

ReactDOM.createRoot(

  document.getElementById("root")

).render(

  <ThemeProvider>
      <AuthProvider>
        <App />
        <ToastContainer position="top-right" autoClose={2000} />
      </AuthProvider>
  </ThemeProvider>

);