import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import About from "./Pages/About/About";
import Recent from "./Pages/Recent/Recent";
import Home from "./Pages/Home/Home";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="https://jeremydurden.github.io/simple-life-blog/">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="recent" element={<Recent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
