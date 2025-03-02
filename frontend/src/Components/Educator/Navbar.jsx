import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../context/Appcontext";

const Navbar = () => {
  const { user } = useUser();

  return (
    <nav className="flex justify-between items-center py-4 border-b border-gray-300 sticky top-0 z-50 bg-white px-6">
      {/* Left Section: Logo */}
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

      {/* Right Section: User Profile */}
      <div className="flex items-center gap-4 text-gray-500">
        <p className="hidden sm:block text-base font-medium">
          Hi! {user ? user.fullName : "Developer"}
        </p>
        {user ? (
          <button className="px-4 py-2 text-sm font-semibold bg-gray-100 rounded-lg hover:bg-gray-200 transition">
            Logout
          </button>
        ) : (
          <img
            className="w-10 h-10 rounded-full border border-gray-300 object-cover"
            src="/default-profile.png" 
            alt="Profile"
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
