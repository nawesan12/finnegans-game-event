"use client";
import React, { useState, useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import { stations } from "@/data/station";
import { useGameStore } from "@/store/gameStore";
import Icon from "@/components/Icon";
import Link from "next/link";

const ConquistaPage = () => {
  const router = useRouter();
  const params = useParams();
  const { id } = params;

  const station = useMemo(() => stations.find((s) => s.id === id), [id]);

  const { stations: stationProgress, completeStation } = useGameStore();

  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (error) {
      setError(false);
    }
  };

  const handleSubmit = () => {
    if (!station) return;

    const correctAnswers = station.answers;
    const userAnswers = inputValue.trim().split(" ");

    if (
      userAnswers.length === correctAnswers.length &&
      userAnswers.every((ans, i) => ans.toLowerCase() === correctAnswers[i].toLowerCase())
    ) {
      completeStation(station.id, userAnswers);
      router.push("/estaciones");
    } else {
      setError(true);
    }
  };

  if (!station) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#04102d] text-white">
        <p>Estación no encontrada.</p>
        <Link href="/estaciones">
          <button className="text-cyan-400 ml-4">Volver</button>
        </Link>
      </div>
    );
  }

  const completedCount = stationProgress.filter((s) => s.completed).length;
  const allCompleted = completedCount === stations.length;

  return (
    <div className="bg-[#04102d] text-white min-h-screen flex flex-col items-center justify-between p-4">
      {/* Header placeholder */}
      <header className="w-full p-6 text-center">
        <h1 className="text-2xl font-bold tracking-wider">{station.name}</h1>
      </header>

      {/* Modal */}
      <main className="flex-grow flex items-center justify-center">
        <div className="bg-[#1C1A42] p-8 rounded-2xl shadow-lg w-full max-w-md mx-auto border-2 border-cyan-400/30">
          <h2 className="text-xl font-semibold text-center mb-6">
            Introduce las 3 palabras clave
          </h2>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            className={`w-full p-4 rounded-full bg-[#04102d] border-2  text-white text-center text-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300 ${
              error ? "border-red-500" : "border-cyan-400/50"
            }`}
            placeholder="palabra1 palabra2 palabra3"
          />
          {error && (
            <p className="text-red-500 text-sm text-center mt-2">
              Las palabras no son correctas. ¡Inténtalo de nuevo!
            </p>
          )}
          <div className="flex justify-center mt-6">
            <button
              onClick={handleSubmit}
              className="bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
            >
              Desbloquear
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 flex items-center justify-center gap-4">
        <Link href="/estaciones">
          <button className="py-2 px-6 font-semibold rounded-full border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 transition-colors duration-300">
            Volver
          </button>
        </Link>
        <div className="flex items-center font-semibold gap-6 px-6 pr-7 py-px text-lg max-w-max text-white rounded-full border-cyan-400 border-2 bg-cyan-400/20 backdrop-blur-lg">
          <span>
            <span>F</span> Conquistas
          </span>
          <span>
            {completedCount}/{stations.length}
          </span>
        </div>
      </footer>
    </div>
  );
};

export default ConquistaPage;
