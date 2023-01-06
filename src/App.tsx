import { useState } from "react";

import { Navbar } from "./components/Navbar";
import "./App.css";
import { AllRoutes } from "./routes/AllRoutes";
import { Footer } from "./components/Footer";
import { motion } from "framer-motion";
function App() {
  return (
    <>
      <Navbar />

      <div
        style={{ scrollBehavior: "smooth", minHeight: "100vh" }}
        className="container-fluid p-0 bg-white"
      >
        <AllRoutes />
      </div>
      <Footer />
    </>
  );
}

export default App;
