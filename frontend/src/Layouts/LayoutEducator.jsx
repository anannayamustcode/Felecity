import React from "react";
import Navbar from "../Components/Educator/Navbar";
import { Outlet } from "react-router-dom";

const LayoutEducator = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default LayoutEducator;
