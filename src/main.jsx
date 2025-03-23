import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import HomePage from "./assets/components/Pages/home.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./assets/components/Layouts/Navbar.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/porto-react" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
