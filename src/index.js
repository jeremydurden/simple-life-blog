import React, { useLayoutEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import App from "./App";
import About from "./Pages/About/About";
import Recent from "./Pages/Recent/Recent";
import Home from "./Pages/Home/Home";
const root = ReactDOM.createRoot(document.getElementById("root"));

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

root.render(
  <React.StrictMode>
    <BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>
      <Wrapper>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="recent" element={<Recent />} />
          </Route>
        </Routes>
      </Wrapper>
    </BrowserRouter>
  </React.StrictMode>
);
