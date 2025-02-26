import React from "react";

const subjects = [
  { name: "Electronics & Communications", icon: "📡" },
  { name: "Computer Science & Engineering", icon: "💻" },
  { name: "Electrical Engineering", icon: "⚡" },
  { name: "Mechanical Engineering", icon: "⚙️" },
  { name: "Chemical Engineering", icon: "⚗️" },
  { name: "Civil Engineering", icon: "🏗️" },
  { name: "Physical Sciences", icon: "🔬" },
  { name: "Biotechnology & Biomedical Engineering", icon: "🧪" },
];

const Explore = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white to-blue-100 flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center py-4 px-10 bg-white shadow-md w-full">
        <div className="flex items-center gap-2">
          <img src="/src/assets/logoo.png" alt="Logo" className="h-14" />
          <div className="flex flex-col leading-tight">
            <h1 className="text-2xl font-bold">Virtual</h1>
            <h1 className="text-2xl font-bold">Labs 2.0</h1>
          </div>
        </div>
        <div className="flex gap-6 text-black font-bold">
          <a href="#labs" className="hover:underline">Labs</a>
          <a href="#mode" className="hover:underline">Mode</a>
          <a href="#about" className="hover:underline">About Us</a>
        </div>
      </nav>

      {/* Subject Grid */}
      <div className="flex-grow flex flex-col items-center justify-center p-10">
        <h2 className="text-4xl font-bold text-black mb-8">SUBJECTS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-6xl">
          {subjects.map((subject, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center hover:scale-105 transition-transform"
            >
              <div className="text-5xl mb-4">{subject.icon}</div>
              <p className="font-semibold text-lg">{subject.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
