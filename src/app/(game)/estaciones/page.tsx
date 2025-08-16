"use client";

import React from "react";
import { stations } from "@/data/station";
import Image from "next/image";
import { Check } from "lucide-react";
import ProgressTracker from "@/components/ProgressTracker";
import { useGameStore } from "@/store/gameStore";
import { useRouter } from "next/navigation";

// Main Component
const App = () => {
  // State to track completed stations
  const { stations: stationsProgress } = useGameStore();
  const router = useRouter();

  const allCompleted =
    stationsProgress.filter((e) => e.completed).length === stations.length;

  const handleContinue = () => {
    const nextStation = stations.find((station) => {
      const progress = stationsProgress.find((s) => s.id === station.id);
      return !progress?.completed;
    });

    if (nextStation) {
      router.push(`/conquista/${nextStation.id}`);
    }
  };

  return (
    <div className=" bg-[#04102d] text-white min-h-screen flex flex-col items-center justify-center py-4">
      <div className="w-full lg:max-w-sm mx-auto flex flex-col ">
        {/* Header */}
        <header className="p-6 text-center ">
          <h1 className="text-2xl font-medium tracking-wider whitespace-nowrap">
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
              const progress = stationsProgress.find(
                (s) => s.id === station.id,
              );
              const isCompleted = !!progress?.completed;
              return (
                <a
                  key={station.id}
                  href={`/conquista/${station.id}`}
                  className="p-[2px] rounded-full"
                  style={{
                    background: isCompleted
                      ? `linear-gradient(to right, ${station.color} 0%, transparent 100%)`
                      : station.color,
                  }}
                >
                  <li
                    className={`flex items-center justify-between px-2 py-2 rounded-full pr-4 transition-all duration-300`}
                    style={{
                      background: isCompleted ? `#04102dbb` : "#04102d",
                    }}
                  >
                    <div
                      className={`flex flex-row w-full items-center space-x-4 ${!isCompleted ? "w-full justify-between px-6" : ""}`}
                    >
                      {!isCompleted && (
                        <div className={`px-4 py-1 rounded-full`}>
                          <Image
                            src={station.icon}
                            alt={station.name}
                            width={200}
                            height={200}
                            className="object-contain size-10"
                          />
                        </div>
                      )}

                      <span
                        className={`font-semibold text-2xl pl-6 py-2 relative z-30`}
                        style={{ color: station.color }}
                      >
                        {station.name}
                      </span>
                    </div>
                    {isCompleted && (
                      <div
                        className={`size-11 flex-shrink-0 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isCompleted ? "bg-[#4bc3fe]" : "bg-gray-700"
                        }`}
                      >
                        {isCompleted && <Check />}
                      </div>
                    )}
                  </li>
                </a>
              );
            })}
          </ul>
        </main>

        {/* Footer */}
        <footer className="py-6  flex items-center justify-center gap-2 px-4">
          <ProgressTracker completedCount={stationsProgress.length} />
          <button
            onClick={handleContinue}
            disabled={allCompleted}
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
