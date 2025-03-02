import React from "react";
import Navbar from "../Pages/Students/navbar"; // Import general navbar
import { Outlet } from "react-router-dom";

const LayoutGeneral = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default LayoutGeneral;
