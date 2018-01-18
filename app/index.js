require("./index.css");
import { render } from "react-dom";
import App from "./components/App";
import React from "react";
import { BrowserRouter } from "react-router-dom";

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app")
);
