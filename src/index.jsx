import React from "react";
import ReactDOM from "react-dom/client";

import App from "./app";

import { Global } from "@emotion/react";
import { styleGlobal } from "./constants/styles/global";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Global styles={styleGlobal} />
    <App />
  </React.StrictMode>
);
