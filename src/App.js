import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeTemplate from "./template/HomeTemplate";
import TableUsers from "./components/tableUsers/TableUsers";
import EditUser from "./components/editUser/EditUser";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeTemplate />}>
          <Route index element={<TableUsers />} />
          <Route path="/edit/:id" element={<EditUser />} />
        </Route>
        <Route path="/header" element={<Header />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
