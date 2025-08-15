"use client";
import React, { useState, useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import { stations } from "@/data/station";
import { useGameStore } from "@/store/gameStore";
import Link from "next/link";
import Image from "next/image";

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

    const correctAnswers = station.key;
    const userAnswers = inputValue.trim().split(" ");

    if (
      userAnswers.length === correctAnswers.length &&
      userAnswers.every(
        (ans, i) => ans.toLowerCase() === correctAnswers[i].toLowerCase(),
      )
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
    <div className="bg-[#04102d] text-white min-h-screen flex flex-col items-center justify-center gap-11 p-4">
      {/* Header placeholder */}

      {/* Modal */}

      <main className="w-full max-w-sm mx-auto">
        <section
          className="border-2 rounded-4xl"
          style={{ borderColor: station.color }}
        >
          <div
            className="border-b-2 flex justify-end items-center relative"
            style={{ borderColor: station.color }}
          >
            <Image
              src={station.icon}
              alt={station.name}
              width={100}
              height={100}
              className="absolute"
              style={{
                top: station?.position?.top,
                left: station?.position?.left,
                rotate: station?.position?.rotation,
                height: station?.position?.height,
              }}
            />
            <h2
              className="text-4xl font-medium text-right px-8 py-10"
              style={{ color: station.color }}
            >
              {station.name}
            </h2>
          </div>

          <div>
            <h3 className="text-3xl px-8 py-6" style={{ color: station.color }}>
              {station.subtitle}
            </h3>

            <p className="px-8 pb-8 text-2xl">{station.content}</p>
          </div>
        </section>
      </main>

      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className={`w-full mx-auto p-4 rounded-full bg-[#04102d] border-2  text-white text-center text-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300 ${
          error ? "border-red-500" : "border-cyan-400/50"
        }`}
        placeholder="palabra1 palabra2 palabra3"
      />

      {error && (
        <p className="text-red-500 text-sm text-center mt-2">
          Las palabras no son correctas. ¡Inténtalo de nuevo!
        </p>
      )}

      {/* Footer */}
      <footer className="w-full py-6 flex items-center justify-between gap-4">
        <Link
          href="/estaciones"
          className="py-px w-full text-center text-lg px-6 font-semibold rounded-full border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 transition-colors duration-300"
        >
          Volver
        </Link>
        <div className="flex items-center font-semibold gap-6 px-6 pr-7 py-px text-lg max-w-max text-white rounded-full border-cyan-400 border-2 bg-cyan-400/20 backdrop-blur-lg">
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
            {completedCount}/{stations.length}
          </span>
        </div>
      </footer>
    </div>
  );
};

export default ConquistaPage;
