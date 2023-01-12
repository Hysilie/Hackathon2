/* eslint-disable import/no-named-as-default */
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CurrentUserContextProvider } from "./contexts/UserContext";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <CurrentUserContextProvider>
      <App />
    </CurrentUserContextProvider>
  </BrowserRouter>
);
