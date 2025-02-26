
import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-cyan-100 text-black p-6">
      {/* Navbar */}
      <nav className="flex justify-between items-center py-0.5 pb-1 border-b border-gray-300"><div className="flex items-center gap-2">
      <img src="/src/assets/logoo.png" alt="Logo" className="h-14" />
          <div className="flex flex-col leading-tight">
            <h1 className="text-2xl font-bold">Virtual</h1>
            <h1 className="text-2xl font-bold">Labs 2.0</h1>
          </div>
          </div>
          <div className="flex gap-6  text-black">
            <a href="#labs" className="hover:underline font-bold text-black">Labs</a>
            <a href="#mode" className="hover:underline font-bold text-black">Mode</a>
            <a href="#about" className="hover:underline font-bold text-black">About Us</a>
            <Link to="/signup" className="hover:underline font-bold text-black">Sign Up</Link>
            <Link to="/login" className="hover:underline font-bold text-black">Log in</Link>
          </div>

      </nav>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center mt-10 px-6 md:px-16">
  <div className="md:w-1/2 text-center md:text-left md:ml-10"> 
    <h2 className="text-4xl font-bold">Welcome to</h2>
    <h2 className="text-4xl font-bold">Virtual Labs</h2>
    <button className="mt-6 px-12 py-2 bg-black text-white" style={{ borderRadius: "30px" }}>
  <Link to="/explore" className="text-white no-underline">Explore</Link>
</button>


        </div>
        <div className="md:w-3/4 ">
          <img src="/src/assets/thing.png" alt="Virtual Lab" className="w-full" />
        </div>
      </div>

{/* Institutes Section */}
<div className="mt-24 pt-9 flex justify-center">
  <img src="/src/assets/iitthingy.png" alt="Institutes" className="w-full h-auto object-cover" />
</div>

    </div>
  );
};

export default LandingPage;
