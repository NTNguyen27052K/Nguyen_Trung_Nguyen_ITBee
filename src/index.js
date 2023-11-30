import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js";

//Setup redux
import { Provider } from "react-redux";
import { store } from "./redux/configStore.js";
//
import theme from "./theme.js";

import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <CssVarsProvider theme={theme}>
      <App />
    </CssVarsProvider>
  </Provider>
);
