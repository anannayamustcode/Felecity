import React from "react";
import { Link } from "react-router-dom"; // Add this import for navigation links

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

const Explore = React.memo(() => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white to-blue-100 flex flex-col">
      <div className="flex-grow flex flex-col items-center justify-center p-10">
        <h2 className="text-4xl font-bold text-black mp-0 mb-8">SUBJECTS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-6xl">
          {subjects.map((subject, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center hover:scale-105 transition-transform cursor-pointer"
            >
              <div className="text-5xl mb-4">{subject.icon}</div>
              <p className="font-semibold text-lg">{subject.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default Explore;
