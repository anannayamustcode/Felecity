import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Components/Educator/Sidebar';
import Navbar from '../Components/Educator/Navbar';

const LayoutEducator = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />  {/* ✅ Ensure Sidebar is included here */}
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default LayoutEducator;
