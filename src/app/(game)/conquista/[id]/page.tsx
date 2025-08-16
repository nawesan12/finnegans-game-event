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
    <div className="bg-[#04102d] text-white min-h-screen flex flex-col items-center justify-center gap-6 pt-8 p-4">
      <section className="rounded-full w-full  text-3xl flex items-center justify-between mb-10 py-2 px-8 bg-[#03001c]">
        <p style={{ color: station.color }}>Piso</p>
        <p style={{ color: station.color }} className="text-4xl">
          {station.floor}
        </p>
      </section>

      <main className="w-full max-w-sm mx-auto">
        <section
          className="border-2 rounded-4xl"
          style={{ borderColor: station.color }}
        >
          <div
            className="border-b-2  relative"
            style={{ borderColor: station.color }}
          >
            <Image
              src={station.icon}
              alt={station.name}
              width={100}
              height={100}
              className="absolute object-contain"
              style={{
                top: station?.position?.top,
                left: station?.position?.left,
                rotate: station?.position?.rotation,
                height: station?.height || 100,
              }}
            />
            <h2
              className="text-3xl font-medium px-8 py-6"
              style={{
                color: station.color,
                textAlign: station.textPosition as CanvasTextAlign,
              }}
            >
              {station.name}
            </h2>
          </div>

          <div>
            <h3 className="text-2xl px-8 py-6" style={{ color: station.color }}>
              {station.subtitle}
            </h3>

            <p className="px-8 pb-8 text-xl">{station.content}</p>
          </div>
        </section>
      </main>

      <div className="relative w-full">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className={`w-full mx-auto p-4 rounded-full bg-[#04102d] border-2  text-white pl-6 text-2xl focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300 placeholder-white ${
            error ? "border-red-500" : "border-cyan-400/50"
          }`}
          placeholder="Ingresa aquí la clave"
        />

        <button className="z-20" onClick={() => alert("Apretaste el boton")}>
          <Image
            src="/flecha-derecha.png"
            alt="Finnegans"
            width={64}
            height={64}
            className="absolute size-12 right-2 top-1/2 transform -translate-y-1/2"
          />
        </button>
      </div>

      {error && (
        <p className="text-red-500 text-sm text-center mt-2">
          Las palabras no son correctas. ¡Inténtalo de nuevo!
        </p>
      )}

      {/* Footer */}
      <footer className="w-full pb-6 flex items-center justify-between gap-4">
        <Link
          href="/estaciones"
          className="py-1 w-full text-center text-lg px-6 font-semibold rounded-full border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 transition-colors duration-300"
        >
          Volver
        </Link>
        <div className="flex items-center font-semibold gap-6 px-6 pr-7 py-1 text-lg max-w-max text-white rounded-full border-cyan-400 border-2 bg-cyan-400/20 backdrop-blur-lg">
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
