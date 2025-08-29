"use client";
import React, { useState, useMemo, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import { stations } from "@/data/station";
import { useGameStore } from "@/store/gameStore";
import Link from "next/link";
import Image from "next/image";
import ProgressTracker from "@/components/ProgressTracker";
import { motion, AnimatePresence } from "framer-motion";

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
    if (error) setError(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!station) return;

    const correctAnswer = station.key;
    //@ts-expect-error bla
    const formData = new FormData(formRef?.current);

    if (correctAnswer.includes(formData.get("answer") as string)) {
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
      <motion.div
        className="flex items-center justify-center min-h-screen bg-[#04102d] text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <p>Estación no encontrada.</p>
        <Link href="/estaciones">
          <button className="text-cyan-400 ml-4">Volver</button>
        </Link>
      </motion.div>
    );
  }

  const completedCount = stationProgress.filter((s) => s.completed).length;

  return (
    <motion.div
      className="bg-[#04102d] lg:max-w-sm lg:mx-auto  text-white h-svh max-h-svh flex flex-col items-center justify-center gap-4 pt-8 p-4"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <motion.section
        className="rounded-full w-full text-3xl flex items-center justify-between mb-10 py-2 px-8 bg-[#03001c]"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p style={{ color: station.color }}>Piso</p>
        <p style={{ color: station.color }} className="text-4xl">
          {station.floor}
        </p>
      </motion.section>

      {/* Main Card */}
      <motion.main
        className="w-full max-w-sm mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <section
          className="border rounded-4xl"
          style={{ borderColor: station.color }}
        >
          <div
            className="border-b relative pt-2"
            style={{ borderColor: station.color }}
          >
            <motion.div
              initial={{ rotate: -20, opacity: 0, scale: 0.8 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src={station.icon}
                alt={station.name}
                width={200}
                height={200}
                className="absolute z-[9999] object-contain size-18"
                style={{
                  top: station?.position?.top,
                  left: station?.position?.left,
                  rotate: station?.position?.rotation,
                }}
              />
            </motion.div>
            <h2
              className="text-4xl font-semibold px-8 py-6"
              style={{
                color: station.color,
                textAlign: station.textPosition as CanvasTextAlign,
              }}
            >
              {station.name}
            </h2>
          </div>

          <div>
            <h3
              className="text-2xl px-8 py-6 pb-2 font-medium italic "
              style={{ color: station.color }}
            >
              {station.subtitle}
            </h3>
            <p className="px-8 pb-8 font-thin text-xl">{station.content}</p>
          </div>
        </section>
      </motion.main>

      {/* Form */}
      <motion.form
        ref={formRef}
        onSubmit={handleSubmit}
        className={`relative w-full rounded-full p-1 ${
          error
            ? "bg-red-500"
            : "bg-gradient-to-r from-[#4bc3fe] via-[#17214f] to-[#4bc3fe]"
        }`}
        initial={{ y: 30, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          x: error ? [0, -8, 8, -8, 8, 0] : 0, // 👈 Shake animation
        }}
        transition={{ duration: error ? 0.4 : 0.5 }}
      >
        <input
          type="text"
          name="answer"
          value={inputValue}
          onChange={handleInputChange}
          className="w-full mx-auto p-4 py-4 rounded-full bg-[#04102d] text-white pl-6 text-xl focus:outline-none focus:ring-2 transition-all duration-300 placeholder-white font-medium"
          placeholder="Ingresa aquí la clave"
        />
        {!error && (
          <motion.button
            type="submit"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute right-3 top-1/2  transform -translate-y-1/2 size-12 flex items-center justify-center z-50"
          >
            <Image
              src="/flecha-derecha.png"
              alt="Enviar"
              width={64}
              height={64}
              className="object-contain"
            />
          </motion.button>
        )}
      </motion.form>

      <AnimatePresence>
        {error && (
          <motion.p
            key="error-message"
            className="text-red-500 text-sm text-center mt-1"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          >
            Las palabras no son correctas. ¡Inténtalo de nuevo!
          </motion.p>
        )}
      </AnimatePresence>

      {/* Footer */}
      <motion.footer
        className="w-full pb-6 flex items-center justify-between gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <Link
          href="/estaciones"
          className="py-1 w-full text-center text-lg px-6 font-semibold rounded-full border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 transition-colors duration-300"
        >
          Volver
        </Link>
        <ProgressTracker completedCount={completedCount} />
      </motion.footer>
    </motion.div>
  );
};

export default ConquistaPage;
