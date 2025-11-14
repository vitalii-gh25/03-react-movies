// src/main.tsx

import React from "react";
import ReactDOM from "react-dom/client";

// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from './App.tsx'

import "modern-normalize";
import "../src/global.css";
import App from "./components/App/App";

// createRoot(document.getElementById("root")!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
