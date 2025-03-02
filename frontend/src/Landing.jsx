
import React from "react";
import { Link } from "react-router-dom";
import IITLogos from "./Components/Others/movingIITs";

const LandingPage = React.memo(() => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-cyan-100 text-black p-6">
    

      <div className="flex flex-col md:flex-row items-center mt-10 px-6 md:px-16">
        <div className="md:w-1/2 text-center md:text-left md:ml-10"> 
          <h2 className="text-4xl font-bold">Welcome to</h2>
          <h2 className="text-4xl font-bold">Virtual Labs</h2>

          <Link to="/explore">
  <button className="mt-6 px-12 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-all">
    Explore
  </button>
</Link>

        </div>
        <div className="md:w-3/4">
          <img src="/src/assets/thing.png" alt="Virtual Lab Illustration" className="w-full" />
        </div>
      </div>
     
      <div className="mt-24 pt-5 flex justify-center">
        <IITLogos/>
      </div>
    </div>
  );
});

export default LandingPage;
