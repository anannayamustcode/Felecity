import React from "react";
import { Link } from "react-router-dom";

const SignupPage = () => {
  return (
    <div className="min-h-screen flex items-center w-320 justify-center bg-gradient-to-b from-white to-cyan-100">
      <Link to="/" className="absolute top-5 left-5 text-gray-700 text-3xl">
        ⌂
      </Link>
        <div className="bg-white p-10 rounded-2xl shadow-xl  ">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6 mt-6">Create an Account</h2>
        <form className="space-y-5">
        <input
  type="text"
  placeholder="Full Name"
  class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-500"
/>
<input
  type="email"
  placeholder="Email Address"
  class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-500"
/>
<input
  type="password"
  placeholder="Password"
  class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-500"
/>
<Link to={'/educator'}>
          <button 
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-lg font-medium hover:bg-blue-600 hover:cursor-pointer transition-all"
          >
            Sign Up
          </button>
          </Link>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;