  import React from 'react';
  import { Outlet } from 'react-router-dom';
  import Sidebar from '../Components/Educator/Sidebar';
  import Navbar from '../Components/Educator/navbar';  // Ensure correct case for imports
  import Footer from '../Components/Educator/Footer';

  const LayoutEducator = () => {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex flex-1">
          <Sidebar />
          <div className="flex-1">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  export default LayoutEducator;
