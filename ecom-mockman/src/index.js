import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";
import { makeServer } from "./server";
import { ProductProvider } from "./contexts/product-context";
import { AuthProvider } from "./contexts/auth-context";
import { CartProvider } from "./contexts/cart-context";
import { WishlistProvider } from "./contexts/wish-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>

      <AuthProvider>
      <ProductProvider>
        <WishlistProvider>
        <CartProvider>
    <App />
    </CartProvider>
    </WishlistProvider>
    </ProductProvider>
    </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
