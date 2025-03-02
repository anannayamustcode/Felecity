import React from "react";
import logo from "../../assets/logoo.png";
import { Link } from "react-router-dom";
import { useUser } from "../../context/Appcontext";  // Ensure this is the correct path

// Import UserButton if it exists
// import { UserButton } from "../../components/UserButton"; 

const Navbar = () => {  // ✅ Component name should start with uppercase
  const { user } = useUser();

  return (
    <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-500 py-3">
      <Link to="/">
        <img src={logo} alt="Logo" className="w-28 lg:w-32" />
      </Link>
      <div className="flex items-center gap-5 text-gray-500 relative">
        <p>Hi! {user ? user.fullName : "Developers"}</p>
        {user ? (
          <button>Logout</button>  // Replace with <UserButton /> if available
        ) : (
          <img className="max-w-8" src="/default-profile.png" alt="Profile" />  // Replace with a valid image path
        )}
      </div>
    </div>
  );
};

export default Navbar;
