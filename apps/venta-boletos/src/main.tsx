import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/app"; // Asegúrate de crear este archivo
import "./styles.css"; // Estilos globales

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);