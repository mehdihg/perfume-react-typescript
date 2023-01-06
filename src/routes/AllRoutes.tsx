import React from "react";
import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home";
import { Store } from "../pages/Store";
export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/store" element={<Store />} />
    </Routes>
  );
};
