import React from "react";
import { Outlet } from "react-router-dom";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Outlet />
      <Navbar />
      <Card />
    </>
  );
};

export default App;
