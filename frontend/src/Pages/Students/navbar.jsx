import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 border-b border-gray-300 sticky top-0 z-50 bg-white px-6">
      <div className="flex items-center gap-2">
        <Link to="/">
          <img src="/src/assets/logoo.png" alt="Virtual Labs Logo" className="h-14" />
        </Link>
        <Link to="/">
          <div className="flex flex-col leading-tight">
            <h1 className="text-2xl font-bold">Virtual</h1>
            <h1 className="text-2xl font-bold">Labs 2.0</h1>
          </div>
        </Link>
      </div>
      <div className="flex gap-6 text-black">
        <a href="#labs" className="hover:underline font-bold text-black">Labs</a>
        <a href="#mode" className="hover:underline font-bold text-black">Mode</a>
        <a href="#about" className="hover:underline font-bold text-black">About Us</a>
        <Link to="/signup" className="hover:underline font-bold text-black">Sign Up</Link>
        <Link to="/login" className="hover:underline font-bold text-black">Log in</Link>
      </div>
    </nav>
  );
};

export default Navbar;
