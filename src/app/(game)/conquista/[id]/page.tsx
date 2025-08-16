"use client";
import React, { useState, useMemo, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import { stations } from "@/data/station";
import { useGameStore } from "@/store/gameStore";
import Link from "next/link";
import Image from "next/image";
import ProgressTracker from "@/components/ProgressTracker";

const ConquistaPage = () => {
  const router = useRouter();
  const params = useParams();
  const { id } = params;

  const station = useMemo(() => stations.find((s) => s.id === id), [id]);

  const { stations: stationProgress, completeStation } = useGameStore();

  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);
  const formRef = useRef(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (error) {
      setError(false);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!station) return;

    const correctAnswer = station.key;

    //@ts-expect-error bla
    const formData = new FormData(formRef?.current);

    if (formData.get("answer") === correctAnswer) {
      completeStation(station.id, formData.get("answer") as string);
      router.push("/estaciones");
    } else {
      setError(true);
      setTimeout(() => {
        //@ts-expect-error bla
        formRef.current?.reset();
        setError(false);
      }, 1700);
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
              width={200}
              height={200}
              className="absolute object-contain size-24"
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

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className={`relative w-full rounded-full p-1 ${error ? "bg-red-500" : "bg-gradient-to-r from-[#4bc3fe] from-0% via-[#17214f] via-50% to-[#4bc3fe] to-100%"}`}
      >
        <input
          type="text"
          name="answer"
          value={inputValue}
          onChange={handleInputChange}
          className={`w-full mx-auto p-4 rounded-full bg-[#04102d]   text-white pl-6 text-2xl focus:outline-none focus:ring-2  transition-all duration-300 placeholder-white`}
          placeholder="Ingresa aquí la clave"
        />

        {!error && (
          <button className="z-20" type="submit">
            <Image
              src="/flecha-derecha.png"
              alt="Finnegans"
              width={64}
              height={64}
              className="absolute size-12 right-2 top-1/2 transform -translate-y-1/2"
            />
          </button>
        )}

        {error && (
          <p className="text-red-500 text-sm text-center mt-1">
            Las palabras no son correctas. ¡Inténtalo de nuevo!
          </p>
        )}
      </form>

      {/* Footer */}
      <footer className="w-full pb-6 flex items-center justify-between gap-4">
        <Link
          href="/estaciones"
          className="py-1 w-full text-center text-lg px-6 font-semibold rounded-full border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 transition-colors duration-300"
        >
          Volver
        </Link>
        <ProgressTracker completedCount={completedCount} />
      </footer>
    </div>
  );
};

export default ConquistaPage;
