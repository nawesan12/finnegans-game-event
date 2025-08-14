"use client";
import React, { useEffect } from "react";
import { stations } from "@/data/station";
import Icon from "@/components/Icon";
import { useGameStore } from "@/store/gameStore";
import Link from "next/link";

// Main Component
const App = () => {
  const {
    stations: stationProgress,
    initializeStations,
    completeStation,
  } = useGameStore();

  useEffect(() => {
    initializeStations(stations);
  }, [initializeStations]);

  const completedCount = stationProgress.filter((s) => s.completed).length;
  const allCompleted = completedCount === stations.length;

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
              const progress = stationProgress.find((s) => s.id === station.id);
              const isCompleted = progress?.completed || false;
              return (
                <Link
                  key={station.id}
                  href={`/conquista/${station.id}`}
                  passHref
                >
                  <li
                    className={`flex items-center justify-between p-3 rounded-full border bg-[#1C1A42] transition-all duration-300 ${station.color}`}
                  >
                    <div
                      className={`flex flex-row w-full items-center space-x-4
                      `}
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
                      <div
                        className={`w-10 h-10 flex-shrink-0 rounded-full flex items-center justify-center transition-all duration-300 bg-gradient-to-br from-cyan-400 to-blue-600`}
                      >
                        <Icon name="check" className="w-5 h-5 text-white" />
                      </div>
                    )}
                  </li>
                </Link>
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
              {completedCount}/{stations.length}
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
