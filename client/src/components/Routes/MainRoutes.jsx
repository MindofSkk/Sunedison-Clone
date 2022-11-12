import React from "react";
import { Routes, Route } from "react-router-dom";
import { Calulator } from "../pages/Calulator";
import { Home } from "../pages/Home";
import { Solar_Calculator } from "../pages/Solar_Calculator";


export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/calulator" element={<Calulator />} />
      <Route path="/solar-calculator" element={<Solar_Calculator />} />

      
    </Routes>
  );
};
