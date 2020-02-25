import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ProductProvider } from "./Context";

// importing router
import { BrowserRouter as Router } from "react-router-dom";

// importing bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <ProductProvider>
    <Router>
      <App />
    </Router>
  </ProductProvider>,
  document.getElementById("root")
);
