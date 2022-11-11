import React from "react";
import { Routes, Route } from "react-router-dom";
import { Calulator } from "../pages/Calulator";
import { Home } from "../pages/Home";


export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/calulator" element={<Calulator />} />
    </Routes>
  );
};
