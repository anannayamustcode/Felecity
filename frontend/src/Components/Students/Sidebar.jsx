import { useState } from "react";
import { Menu, ChevronLeft, ChevronRight } from "lucide-react";

const Sidebar = ({ scrollToSection }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const sections = [
    { name: "Aim", id: "aim" },
    { name: "Title", id: "title" },
    { name: "Description", id: "description" },
    { name: "Theory", id: "theory" },
    { name: "Simulation", id: "simulation" },
  ];

  return (
    <div className={`h-screen fixed top-0 left-0 bg-gray-800 text-white transition-all duration-300 ${isCollapsed ? "w-16" : "w-64"}`}>
      <div className="flex justify-between items-center p-4">
        {!isCollapsed && <h2 className="text-lg font-bold">Menu</h2>}
        <button onClick={() => setIsCollapsed(!isCollapsed)} className="p-1 rounded hover:bg-gray-700">
          {isCollapsed ? <ChevronRight /> : <ChevronLeft />}
        </button>
      </div>
      <nav className="mt-4">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="w-full text-left px-4 py-2 hover:bg-gray-700 flex items-center"
          >
            <Menu className="mr-2" />
            {!isCollapsed && section.name}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
