import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js";

//Setup redux
import { Provider } from "react-redux";
import { store } from "./redux/configStore.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
