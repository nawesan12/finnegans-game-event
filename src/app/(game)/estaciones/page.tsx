"use client";
import { a } from "motion/react-m";
import React, { useState } from "react";

// Helper component for SVG icons. In a real app, these might be separate files.
const Icon = ({ name, className }: { name: string; className?: string }) => {
  const icons: { [key: string]: React.ReactNode } = {
    empathy: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="8.5" cy="7" r="4" />
        <path d="M20 8v6" />
        <path d="M23 11h-6" />
      </svg>
    ),
    quality: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path d="M14.5 4.5A5 5 0 0 0 9 9.5c0 2.22 1.79 4 4 4s4-1.78 4-4c0-1.01-.3-1.94-.8-2.69" />
        <path d="M12 12.5a2.5 2.5 0 0 1-2.5-2.5c0-1.38 1.12-2.5 2.5-2.5" />
        <path d="M12 15c-3 0-6 2-6 4v2h12v-2c0-2-3-4-6-4z" />
      </svg>
    ),
    commitment: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        <path d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        <path d="M12 10v.01" />
      </svg>
    ),
    creativity: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      </svg>
    ),
    generosity: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.77-.77-.77a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
        <path d="M12 5.27L13.22 9l3.5.22-2.68 2.2.95 3.58L12 13.27l-3 .95.95-3.58L7.28 9.22l3.5-.22L12 5.27z"></path>
      </svg>
    ),
    leadership: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
      </svg>
    ),
    purpose: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z" />
      </svg>
    ),
    check: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    ),
  };
  return icons[name] || null;
};

// Data for the list items
const stations = [
  {
    id: "quality",
    name: "Calidad",
    icon: "quality",
    color: "border-orange-400",
    iconColor: "text-orange-400",
    textColor: "text-orange-400",
  },
  {
    id: "generosity",
    name: "Colaboracion",
    icon: "generosity",
    color: "border-blue-500",
    iconColor: "text-blue-500",
    textColor: "text-blue-500",
  },
  {
    id: "commitment",
    name: "Compromiso",
    icon: "commitment",
    color: "border-red-500",
    iconColor: "text-red-500",
    textColor: "text-red-500",
  },
  {
    id: "creativity",
    name: "Creatividad",
    icon: "creativity",
    color: "border-pink-500",
    iconColor: "text-pink-500",
    textColor: "text-pink-500",
  },

  {
    id: "empathy",
    name: "Empatía",
    icon: "empathy",
    color: "border-cyan-400",
    iconColor: "text-cyan-400",
    textColor: "text-cyan-400",
  },
  {
    id: "leadership",
    name: "Liderazgo",
    icon: "leadership",
    color: "border-green-400",
    iconColor: "text-green-400",
    textColor: "text-green-400",
  },
  {
    id: "purpose",
    name: "Propósito",
    icon: "purpose",
    color: "border-yellow-400",
    iconColor: "text-yellow-400",
    textColor: "text-yellow-400",
  },
];

// Main Component
const App = () => {
  // State to track completed stations
  const [completed, setCompleted] = useState<string[]>([]);

  const handleToggleComplete = (id: string) => {
    setCompleted((prev) =>
      prev.includes(id)
        ? prev.filter((stationId) => stationId !== id)
        : [...prev, id],
    );
  };

  const allCompleted = completed.length === stations.length;

  return (
    <div className=" bg-[#04102d] text-white min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full lg:max-w-sm mx-auto flex flex-col ">
        {/* Header */}
        <header className="p-6 text-center ">
          <h1 className="text-2xl font-bold tracking-wider">
            Estaciones a descubrir
          </h1>
        </header>

        {/* Stations List */}
        <main className="flex-grow p-4">
          <ul className="flex flex-col gap-4">
            {stations.map((station) => {
              const isCompleted = completed.includes(station.id);
              return (
                <a key={station.id} href={`/conquista/${station.id}`}>
                  <li
                    className={`flex items-center justify-between p-3 rounded-full border bg-[#1C1A42] transition-all duration-300 ${station.color}`}
                  >
                    <div
                      className={`flex flex-row w-full items-center space-x-4 ${!isCompleted ? "w-full justify-between pr-6" : ""}`}
                    >
                      <div
                        className={`p-1.5 rounded-full ${station.iconColor}`}
                      >
                        <Icon name={station.icon} className="w-6 h-6" />
                      </div>
                      <span
                        className={`font-semibold text-xl ${station.textColor}`}
                      >
                        {station.name}
                      </span>
                    </div>
                    {isCompleted && (
                      <button
                        onClick={() => handleToggleComplete(station.id)}
                        className={`w-10 h-10 flex-shrink-0 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isCompleted
                            ? "bg-gradient-to-br from-cyan-400 to-blue-600"
                            : "bg-gray-700"
                        }`}
                      >
                        {isCompleted && (
                          <Icon name="check" className="w-5 h-5 text-white" />
                        )}
                      </button>
                    )}
                  </li>
                </a>
              );
            })}
          </ul>
        </main>

        {/* Footer */}
        <footer className="py-6 flex items-center justify-center gap-2">
          <p className="flex items-center font-semibold gap-6 px-6 pr-7 py-px text-lg max-w-max text-white rounded-full border-cyan-400 border-2 bg-cyan-400/20 backdrop-blur-lg">
            <span>
              <span>F</span> Conquistas
            </span>
            <span>
              {completed.length}/{stations.length}
            </span>
          </p>
          <button
            className={`py-px text-lg px-6 font-semibold rounded-full max-w-max w-full transition-all duration-300 ${
              allCompleted
                ? "bg-gradient-to-r from-green-400 to-teal-500 text-white shadow-lg shadow-green-500/30"
                : "bg-transparent border-cyan-400 border-2"
            }`}
          >
            {allCompleted ? "¡Completado!" : "Continuar"}
          </button>
        </footer>
      </div>
    </div>
  );
};

export default App;
