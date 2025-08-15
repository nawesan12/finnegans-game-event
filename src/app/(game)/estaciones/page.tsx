"use client";

import React, { useState } from "react";
import { stations } from "@/data/station";
import Image from "next/image";
import { Check } from "lucide-react";

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
    <div className=" bg-[#04102d] text-white min-h-screen flex flex-col items-center justify-center py-4">
      <div className="w-full lg:max-w-sm mx-auto flex flex-col ">
        {/* Header */}
        <header className="p-6 text-center ">
          <h1 className="text-3xl font-medium tracking-wider whitespace-nowrap">
            Estaciones a &nbsp;
            <div className="inline-flex relative -left-2 max-w-max">
              <span>descubrir</span>

              <Image
                src="/subrayado.png"
                alt="Finnegans"
                width={32}
                height={32}
                className="w-full absolute -bottom-2"
              />
            </div>
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
                    className={`flex items-center justify-between px-2 py-2 rounded-full border  transition-all duration-300`}
                    style={{ borderColor: station.color }}
                  >
                    <div
                      className={`flex flex-row w-full items-center space-x-4 ${!isCompleted ? "w-full justify-between pr-6" : ""}`}
                    >
                      <div className={`px-4 py-1 rounded-full`}>
                        <Image
                          src={station.icon}
                          alt={station.name}
                          width={200}
                          height={200}
                          className="object-contain size-12"
                        />
                      </div>
                      <span
                        className={`font-medium text-3xl`}
                        style={{ color: station.color }}
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
                        {isCompleted && <Check />}
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
            <span className="flex items-center gap-2">
              <Image
                src="/finnegans.png"
                alt="Conquistas"
                width={17}
                height={17}
              />
              Conquistas
            </span>
            <span>
              {completed.length}/{stations.length}
            </span>
          </p>
          <button
            className={`py-1 text-lg px-6 font-semibold rounded-full max-w-max w-full transition-all duration-300 ${
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
