import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import "./fonts/Lora-Italic-VariableFont_wght.ttf";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import ShoppingCartProvider from "./context/ShoppingCartProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ShoppingCartProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ShoppingCartProvider>
);
