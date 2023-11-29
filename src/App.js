import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeTemplate from "./template/HomeTemplate";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeTemplate />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
