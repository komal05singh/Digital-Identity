import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Router from "./Router";
import { AppContextProvider } from "./AppContext";
import { Auth } from "./Pages/Auth";
import RouterWrapper from "./RouterWrapper";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <AppContextProvider>
    {/* <Router /> */}
    {/* <Auth /> */}
    <RouterWrapper />
  </AppContextProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
