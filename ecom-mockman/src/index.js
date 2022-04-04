import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { makeServer } from "./server";
import { ProductProvider } from "./contexts/product-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ProductProvider>
    <App />
    </ProductProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
